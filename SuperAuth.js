const SuperAuth = function () {
    this.evaluate = function (context) {
        const http_request = new NetworkHTTPRequest();

        http_request.requestUrl =
            'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + this.firebaseApiKey;
        http_request.requestMethod = 'POST';
        http_request.requestBody = JSON.stringify({
            email: this.email,
            password: this.password,
            returnSecureToken: true,
        });
        http_request.setRequestHeader('Referer', 'http://localhost:3000');
        http_request.setRequestHeader('Content-Type', 'application/json');
        http_request.send();

        return JSON.parse(http_request.responseBody)["idToken"];
    };
};

SuperAuth.identifier = 'com.eulerity.SuperAuth';
SuperAuth.title = 'SuperAuth';
SuperAuth.help = 'https://eulerity.com';

// AIzaSyBNW2VNKcSzm5DqMXm0HSgdRVAS2-8470Q

SuperAuth.inputs = [
    InputField('email', 'Email', 'String'),
    InputField('password', 'Password', 'SecureValue'),
    InputField('firebaseApiKey', 'Firebase API Key', 'String')
];

registerDynamicValueClass(SuperAuth);
