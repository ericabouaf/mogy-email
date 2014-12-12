
exports.email = function (input, config, cb) {
    require('nodemailer').createTransport(config).sendMail(input, cb);
};
