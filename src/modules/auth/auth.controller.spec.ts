/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service'
import { UserDto } from '../users/dto/user.dto';

describe('AuthController', () => {
  let controller: AuthController;
  let service: AuthService;

  beforeEach(async () => {

    const AuthServiceProvider = {
      provide: AuthService,
      useFactory: () => ({
        login: jest.fn(() => { }),
        signUp: jest.fn(() => { })
      })
    }

    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [AuthService, AuthServiceProvider]
    }).compile();

    controller = module.get<AuthController>(AuthController);
    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('calling login method', () => {
    const dto = new UserDto();
    expect(controller.login(dto)).not.toEqual(null)
  })
});
