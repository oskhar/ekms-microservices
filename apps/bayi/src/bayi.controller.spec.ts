import { Test, TestingModule } from '@nestjs/testing';
import { BayiController } from './bayi.controller';
import { BayiService } from './bayi.service';

describe('BayiController', () => {
  let bayiController: BayiController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [BayiController],
      providers: [BayiService],
    }).compile();

    bayiController = app.get<BayiController>(BayiController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(bayiController.getHello()).toBe('Hello World!');
    });
  });
});
