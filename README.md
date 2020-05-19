# Iframe CSP Sandbox Example
Guide for Iframe and Content Security Policy (CSP)

## 📝 Table of Contents
- [About](#about)
- [Getting Started](#getting_started)
- [Information](#information)

## 🧐 About <a name = "about"></a>

- [x] Iframe CSP Sandboxing

## 🏁 Getting Started <a name = "getting_started"></a>

```
npm install
npm start

http://localhost:3000/iframecspsandbox.html

```

## Information <a name = "information"></a>

 - [x] Security
    ```
    When using an iframe, we are dealing with content coming from third
    party.
    you are increasing the risk of having potential vulnerability attack
    in your application.
    Luckily, we got "sandbox" attribute
    ```
    ```
    Rule of thumb: follow "the principle of least privilege"
    ```
 - [x] sandbox="allow-same-origin"

 - [x] referrerPolicy="strict-origin"

