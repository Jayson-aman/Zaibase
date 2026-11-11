// 使い捨てメール（登録のあとすぐ捨てるアドレス）のドメイン一覧。
// 無料のAI体験を、アカウントを作り直して何度も使われるのを防ぐための「ふるい」。
// 完全ではない（新しいドメインは毎日できる）。ふるいにかかるのは、よく使われる大手のサービスだけ。
// ⚠️ アプリ側（ahiru/utils/disposableEmail.ts）に同じ一覧がある。変えるときは両方そろえる
//    （scripts/check-disposable-list.mjs が食いちがいを見張る）。
module.exports = [
  "mailinator.com","guerrillamail.com","guerrillamail.net","guerrillamail.org","guerrillamail.biz",
  "guerrillamail.de","guerrillamail.info","guerrillamailblock.com","sharklasers.com","grr.la","pokemail.net",
  "spam4.me","10minutemail.com","10minutemail.net","10minutemail.org","20minutemail.com","tempmail.com",
  "temp-mail.org","temp-mail.io","temp-mail.ru","tempmail.net","tempmailo.com","tempail.com","tempr.email",
  "tempinbox.com","tmpmail.org","tmpmail.net","tmail.ws","yopmail.com","yopmail.fr","yopmail.net",
  "cool.fr.nf","jetable.org","throwawaymail.com","trashmail.com","trashmail.net","trashmail.de",
  "trash-mail.com","getnada.com","nada.email","maildrop.cc","mailnesia.com","dispostable.com",
  "fakeinbox.com","fakemail.net","fakemailgenerator.com","emailfake.com","email-fake.com","mintemail.com",
  "moakt.com","moakt.cc","mohmal.com","emailondeck.com","spamgourmet.com","burnermail.io","mailcatch.com",
  "mytemp.email","inboxkitten.com","discard.email","discardmail.com","spambog.com","spamex.com","mail.tm",
  "harakirimail.com","mailsac.com","anonbox.net","mailpoof.com","linshiyouxiang.net","1secmail.com",
  "1secmail.org","1secmail.net","esiix.com","wwjmp.com","xojxe.com","yoggm.com","vjuum.com","laafd.com",
  "txcct.com","dcctb.com","kzccv.com","qiott.com","wuuvo.com","icznn.com","ezztt.com","mail7.io",
  "tempmailaddress.com","tempmailer.com","mailtemp.info","temporary-mail.net","trbvm.com","dropmail.me",
  "emltmp.com","mailforspam.com","getairmail.com","meltmail.com","mvrht.net","trashmail.io","wegwerfmail.de",
  "wegwerfmail.net","owlymail.com","tmpeml.com","luxusmail.org","fexpost.com","fexbox.org","mailbox.in.ua",
  "byom.de","eyepaste.com","gmx.us","imgof.com","incognitomail.org","mt2015.com","mytrashmail.com",
  "nospam.ze.tc","sofort-mail.de","spamfree24.org","anonymail.dk","tempsky.com","zetmail.com",
];
