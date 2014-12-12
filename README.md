# mogy-email

Send Email activity for [mogy](https://github.com/neyric/mogy).

## Installation

In your mogy project, install the dependency using npm :

    $ npm install mogy-email --save

To register the `email` activity to Amazon Simple Workflow :

    $ mogy register

## Config

In your mogy environment config file, under the `activities` key, add :

````json
"email": {
    "service": "Gmail",
    "auth": {
        "user": "gmail.user@gmail.com",
        "pass": "userpass"
    }
}
````


Cf <https://github.com/andris9/nodemailer-wellknown#supported-services> for a full list of supported services.

For a full list of available transport, see https://github.com/andris9/Nodemailer


## Sample Decider Usage

````javascript
activity({
    name: 'my-task',
    activity: 'email',
    input:  {
        from: 'Fred Foo ✔ <foo@blurdybloop.com>', // sender address
        to: 'bar@blurdybloop.com, baz@blurdybloop.com', // list of receivers
        subject: 'Hello ✔', // Subject line
        text: 'Hello world ✔', // plaintext body
        html: '<b>Hello world ✔</b>' // html body
    }
})
````
