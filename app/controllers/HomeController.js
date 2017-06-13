let homeController = {
    index: (req, res) => {
        res.render('index', {
            title: 'Trang chủ',
            banerTitle: '',
        });
    }
};

module.exports = homeController;