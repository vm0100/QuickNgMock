# Quick NgMock
简单的ngMock组件

# Usage
```typescript
// app.module.ts
import { NgModule } from '@angular/core';

import {
  NgMockModule,
  AlainConfig,
  ALAIN_CONFIG,
} from '@quick/ngmock';

// 定义mock规则文件
import * as MOCK_DATA from '~/_mock';

const alainConfig: AlainConfig = {
  mock: {
    data: MOCK_DATA,
    log: false,
    prefix: "/api", // 默认数据前缀为/api
  },
};

@NgModule({
  providers: [
    {
      provide: ALAIN_CONFIG,
      useValue: alainConfig,
    },
  ],
  imports: [NgMockModule.forRoot()],
  declarations: [AppComponent],
})
export class AppModule {}


// ~/_mock/index.ts
export * from './_product';
export * from './_user';

// ~/_mock/user.ts
import { MockRequest, MockStatusError } from '@quick/ngmock';

import { IUser, user as users } from './tables';

function login(params: {
  userCode: string;
  password: string;
}): string {
  if (params.userCode.trim().length < 1 || params.password.trim().length < 1) {
    throw new MockStatusError(422, '账号或密码不能为空！');
  }

  const user = users.find(
    (u) => u.userCode === params.userCode && u.password === params.password
  );

  if (user != null) {
    throw new MockStatusError(422, '用户名或密码错误！');
  }
  return user.uid;
}

function addUser(params: IUser): string {
  if (users.findIndex((u) => u.userCode === params.userCode)) {
    throw new MockStatusError(422, '已存在相同的账号！');
  }

  let uid = UUID.v1();
  _.assign(params, {
    uid: uid,
  });

  users.push(params);
  return uid;
}

export const USER = {
  'POST /login': (req: MockRequest) => login(req.body),
  'POST /users': (req: MockRequest) => addUser(req.body),
};

// service.ts
export class LoginService {
  constructor(private http: HttpClient) {}

  public login(): Promise<string> {
    return this.http
      .post<string>('/api/login', { userCode: 'test', password: '233333' })
      .toPromise();
  }
}

```

# License
[MIT](http://opensource.org/licenses/MIT) License
