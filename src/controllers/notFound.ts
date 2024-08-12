import { RequestHandler } from 'express';
import { HTTPError } from '../utils/errors/HTTPError';

export const notFound: RequestHandler = (_req, res) => {
  new HTTPError('Page Not Found', 404, true);
  res.status(404).render('404', { pageTitle: 'Page Not Found', path: '/404' });
};
