import a from "jsonwebtoken";
export var JwtGenerator;
!function(b) {
    const c = (a, b, c)=>({
            algorithm: "ES256",
            keyid: b,
            audience: "appstoreconnect-v1",
            expiresIn: c,
            issuer: a
        })
    ;
    b.tokenSync = (b, d, e, f = 500)=>a.sign(JSON.parse("{}"), b, c(d, e, f))
    , b.token = async (b, d, e, f = 500)=>Promise.resolve(a.sign(JSON.parse("{}"), b, c(d, e, f)))
    ;
}(JwtGenerator || (JwtGenerator = JSON.parse("{}")));

//# sourceMappingURL=index.js.map