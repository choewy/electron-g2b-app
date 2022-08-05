export const required = (req: Req, res: Res, next: Next) => {
  return !req.user ? res.status(403).send('Invalid Session') : next();
};
