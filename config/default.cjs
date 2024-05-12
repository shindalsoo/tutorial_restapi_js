module.exports = {
    port: 3333,
    dbUri: "mongodb://shindalsoo:sds9050@127.0.0.1:37017/testdb?authSource=admin",
    saltWorkFactor: 10,
    accessTokenTtl: "15m",
    refreshTokenTtl: "1y",
publicKey: `-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC8E9EWiTGySzvZNNZ1E5ezs5qd
idKd1WQWyjtNfLv6VDfJLfDLp3az3bEMujTYPN4tnmabiAp0ssWiNBmPiP1mUU2U
vmpZ1DiuHkQeWH4ysJjBJLzDybuze/hGBxPRFK9J67yR4Ywlpui2IceswH3ZTDdP
rB9L713jqNWS8TuHCQIDAQAB
-----END PUBLIC KEY-----`,
privateKey: `-----BEGIN RSA PRIVATE KEY-----
MIICWwIBAAKBgQC8E9EWiTGySzvZNNZ1E5ezs5qdidKd1WQWyjtNfLv6VDfJLfDL
p3az3bEMujTYPN4tnmabiAp0ssWiNBmPiP1mUU2UvmpZ1DiuHkQeWH4ysJjBJLzD
ybuze/hGBxPRFK9J67yR4Ywlpui2IceswH3ZTDdPrB9L713jqNWS8TuHCQIDAQAB
AoGABkU+3lp6nrAlcatyTvr1PteJGyGCNSLtMFlTutSiy8jNB1cRxShzK7IDeiIn
KuJ0od67GwphFtzy++Jyy7dMg3MhWGvQjcJnZi1Ha/4dk4vPFl8Hz/nPSNC0Id1D
vijppz39KwmDzVLvvPgszJPTXBoEeGE2yXSpq0t0czbWwCUCQQDnmxsdhGyAOi/1
Aoz2j9FMmnKnI+nZw3gAT391qHe1Hox891oZYIWMtWMv+dSniHaLBbgNgiNfPDX9
cbg3Wo+jAkEAz+MIbklyqfkJCVFaXtF7HwcSm1W3azGvl6rRaus9pWqG4Hyw9w3i
kGj+1QJcpveA0juBKVCSqNaVDQQr4sXJYwJAIt+L+anS3IvmZLH5n7aQAUTQNrKF
p7BzBTjzLDgtrivnY3mrK18JPOKjCLpJduBpWQ2HZSFPSiu6xWq2Hj+YmQJAQHwT
PGqqF9F5HRvQJYNjZq+B9Q80sxqZdjl1dm38FFij9/SVzDzRX6xCB/8QkHZLzmrI
2PD2XUsatwvpNRHXMwJAKo/xueXx4Gwjv4kpJvk6TgegBSW2UTNKxG6882BWwNUE
qgcWIM8sQNw28VrgGFaAE9gMfk5PLVxKsxhpVarDRA==
-----END RSA PRIVATE KEY-----`,
}
    