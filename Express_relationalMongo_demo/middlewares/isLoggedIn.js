module.exports.isLoggedIn = async (req, res, next) => {
    console.log(req.user);
    if (!req.isAuthenticated()) {
        await req.flash('error', ' You must be signed in first!!');
        return res.redirect('/login');
    }
    next();
};
