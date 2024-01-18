import { Router } from "express";

const router = Router();

router.get('/', (req, res) => {
    res.send('<h1>Hola! 👋🏽</h1>')
});

router.get('/loggers', (req, res) => {
    req.logger.fatal('Esta es una prueba de log fatal');
    req.logger.error('Esta es una prueba de log error');
    req.logger.warning('Esta es una prueba de log warn');
    req.logger.info('Esta es una prueba de log info');
    req.logger.http('Esta es una prueba de log http');
    req.logger.debug('Esta es una prueba de log debug');
    res.status(200).send('OK ✅')
})

export default router;