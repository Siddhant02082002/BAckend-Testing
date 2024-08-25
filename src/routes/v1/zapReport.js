import { Router } from 'express';
import catchAsync from '~/utils/catchAsync';
import validate from '~/middlewares/validate';
import authenticate from '~/middlewares/authenticate';
import roleValidation from '~/validations/roleValidation';
import roleController from '~/controllers/roleController';

const router = Router();

router.post('/', authenticate('role:create'), validate(roleValidation.createRole), catchAsync(roleController.createRole));


export default router;
