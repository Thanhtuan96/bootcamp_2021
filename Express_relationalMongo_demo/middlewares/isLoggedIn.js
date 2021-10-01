module.exports.isLoggedIn = async (req, res, next) => {
    if (!req.isAuthenticated()) {
        req.session.returnTo = req.originalUrl;
        await req.flash('error', ' You must be signed in first!!');
        return res.redirect('/login');
    }
    next();
};
