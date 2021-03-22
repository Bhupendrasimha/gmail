let mailsData = [
  {
    id: 1,
    sender: "Esta",
    title: "Vipe",
    content:
      "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
    email: "epaaso0@alibaba.com",
    type: "starred",
    date: "5/7/2020",
  },
  {
    id: 2,
    sender: "Tracey",
    title: "Mudo",
    content:
      "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
    email: "tmorigan1@ovh.net",
    type: "draft",
    date: "5/20/2020",
  },
  {
    id: 3,
    sender: "Kacie",
    title: "Bluejam",
    content:
      "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
    email: "kmagnay2@cyberchimps.com",
    type: "starred",
    date: "1/23/2021",
  },
  {
    id: 4,
    sender: "Elsa",
    title: "Rhybox",
    content:
      "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
    email: "eshearman3@nydailynews.com",
    type: "starred",
    date: "5/28/2020",
  },
  {
    id: 5,
    sender: "Orren",
    title: "Minyx",
    content:
      "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
    email: "orawe4@dropbox.com",
    type: "important",
    date: "4/30/2020",
  },
  {
    id: 6,
    sender: "Merrile",
    title: "Oyoloo",
    content:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
    email: "mstebbings5@blinklist.com",
    type: "promotions",
    date: "8/6/2020",
  },
  {
    id: 7,
    sender: "Nell",
    title: "Wikivu",
    content:
      "Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    email: "nrebillard6@go.com",
    type: "starred",
    date: "10/13/2020",
  },
  {
    id: 8,
    sender: "Thelma",
    title: "Tazz",
    content:
      "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
    email: "trudram7@economist.com",
    type: "inbox",
    date: "9/18/2020",
  },
  {
    id: 9,
    sender: "Waylan",
    title: "Wordware",
    content:
      "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
    email: "wwellbeloved8@wiley.com",
    type: "draft",
    date: "4/6/2020",
  },
  {
    id: 10,
    sender: "Reeba",
    title: "Divanoodle",
    content:
      "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
    email: "rbendon9@cyberchimps.com",
    type: "inbox",
    date: "12/27/2020",
  },
  {
    id: 11,
    sender: "Jerrie",
    title: "Aibox",
    content:
      "Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
    email: "jmeadowcrofta@telegraph.co.uk",
    type: "important",
    date: "10/10/2020",
  },
  {
    id: 12,
    sender: "Davy",
    title: "Kanoodle",
    content:
      "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
    email: "dgalpenb@geocities.com",
    type: "inbox",
    date: "5/15/2020",
  },
  {
    id: 13,
    sender: "Karla",
    title: "Zoombox",
    content:
      "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    email: "kinglesfieldc@unesco.org",
    type: "draft",
    date: "1/2/2021",
  },
  {
    id: 14,
    sender: "Darin",
    title: "Quire",
    content:
      "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
    email: "dodbyd@arizona.edu",
    type: "social",
    date: "12/18/2020",
  },
  {
    id: 15,
    sender: "Perren",
    title: "Quaxo",
    content: "Phasellus in felis. Donec semper sapien a libero. Nam dui.",
    email: "pprobate@wikispaces.com",
    type: "inbox",
    date: "3/18/2021",
  },
  {
    id: 16,
    sender: "Emilee",
    title: "Tavu",
    content:
      "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    email: "enorfolkf@biglobe.ne.jp",
    type: "draft",
    date: "1/23/2021",
  },
  {
    id: 17,
    sender: "Fonsie",
    title: "Vidoo",
    content:
      "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
    email: "fjozaitisg@census.gov",
    type: "promotions",
    date: "7/23/2020",
  },
  {
    id: 18,
    sender: "Rivi",
    title: "Skaboo",
    content:
      "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    email: "rblinth@drupal.org",
    type: "draft",
    date: "5/13/2020",
  },
  {
    id: 19,
    sender: "Claire",
    title: "Rhyzio",
    content:
      "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    email: "cbenoiti@ox.ac.uk",
    type: "promotions",
    date: "10/14/2020",
  },
  {
    id: 20,
    sender: "Timmy",
    title: "Eimbee",
    content:
      "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
    email: "tplayfootj@ovh.net",
    type: "starred",
    date: "10/13/2020",
  },
  {
    id: 21,
    sender: "Rory",
    title: "Avamba",
    content:
      "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    email: "rmclicek@yelp.com",
    type: "important",
    date: "1/20/2021",
  },
  {
    id: 22,
    sender: "Carin",
    title: "Dynava",
    content:
      "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    email: "cgozneyl@squidoo.com",
    type: "draft",
    date: "1/8/2021",
  },
  {
    id: 23,
    sender: "Ibbie",
    title: "Kwinu",
    content:
      "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    email: "ipideonm@telegraph.co.uk",
    type: "draft",
    date: "2/5/2021",
  },
  {
    id: 24,
    sender: "Ettore",
    title: "Livetube",
    content:
      "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
    email: "ehammerbergern@apple.com",
    type: "important",
    date: "3/18/2021",
  },
  {
    id: 25,
    sender: "Marci",
    title: "Trunyx",
    content:
      "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.",
    email: "mglasheeno@google.pl",
    type: "promotions",
    date: "1/31/2021",
  },
  {
    id: 26,
    sender: "Jerry",
    title: "Izio",
    content:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    email: "jmateusp@ebay.com",
    type: "starred",
    date: "6/22/2020",
  },
  {
    id: 27,
    sender: "Nikolai",
    title: "Voonder",
    content:
      "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
    email: "nattoq@microsoft.com",
    type: "starred",
    date: "12/15/2020",
  },
  {
    id: 28,
    sender: "Bettina",
    title: "Brainsphere",
    content:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
    email: "bhaltonr@japanpost.jp",
    type: "social",
    date: "3/14/2021",
  },
  {
    id: 29,
    sender: "Lorelei",
    title: "Divavu",
    content:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
    email: "lraxworthys@bigcartel.com",
    type: "promotions",
    date: "8/3/2020",
  },
  {
    id: 30,
    sender: "Margarita",
    title: "Chatterbridge",
    content:
      "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.",
    email: "malvarest@privacy.gov.au",
    type: "important",
    date: "12/7/2020",
  },
  {
    id: 31,
    sender: "Nanci",
    title: "Mudo",
    content:
      "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.",
    email: "ntanzeru@multiply.com",
    type: "draft",
    date: "11/28/2020",
  },
  {
    id: 32,
    sender: "Curran",
    title: "Roomm",
    content:
      "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
    email: "cwycliffv@aboutads.info",
    type: "inbox",
    date: "6/9/2020",
  },
  {
    id: 33,
    sender: "Nada",
    title: "Edgeify",
    content:
      "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
    email: "nisaacw@creativecommons.org",
    type: "important",
    date: "3/3/2021",
  },
  {
    id: 34,
    sender: "Jeralee",
    title: "Meetz",
    content:
      "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    email: "jrimourx@adobe.com",
    type: "draft",
    date: "12/17/2020",
  },
  {
    id: 35,
    sender: "Filia",
    title: "Zoombeat",
    content:
      "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
    email: "faldertony@pbs.org",
    type: "social",
    date: "1/23/2021",
  },
  {
    id: 36,
    sender: "Jerrilee",
    title: "Skimia",
    content:
      "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
    email: "jexallz@guardian.co.uk",
    type: "promotions",
    date: "1/26/2021",
  },
  {
    id: 37,
    sender: "Isabelle",
    title: "Blogtags",
    content:
      "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
    email: "iubsdall10@ustream.tv",
    type: "important",
    date: "11/25/2020",
  },
  {
    id: 38,
    sender: "Dulciana",
    title: "Myworks",
    content:
      "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
    email: "dmeddick11@livejournal.com",
    type: "important",
    date: "4/12/2020",
  },
  {
    id: 39,
    sender: "Zitella",
    title: "Quimba",
    content:
      "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
    email: "ztuftin12@msu.edu",
    type: "social",
    date: "4/8/2020",
  },
  {
    id: 40,
    sender: "Molli",
    title: "Janyx",
    content:
      "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
    email: "mhearn13@diigo.com",
    type: "starred",
    date: "11/14/2020",
  },
  {
    id: 41,
    sender: "Heddie",
    title: "Janyx",
    content:
      "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    email: "hbooty14@phoca.cz",
    type: "draft",
    date: "9/9/2020",
  },
  {
    id: 42,
    sender: "Benjy",
    title: "Yodo",
    content: "Phasellus in felis. Donec semper sapien a libero. Nam dui.",
    email: "bghiroldi15@vistaprint.com",
    type: "starred",
    date: "6/15/2020",
  },
  {
    id: 43,
    sender: "Ladonna",
    title: "Voomm",
    content:
      "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    email: "lstedson16@newsvine.com",
    type: "important",
    date: "11/26/2020",
  },
  {
    id: 44,
    sender: "Edie",
    title: "Dabtype",
    content:
      "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    email: "epennell17@examiner.com",
    type: "inbox",
    date: "12/18/2020",
  },
  {
    id: 45,
    sender: "Stephie",
    title: "Twitterbeat",
    content:
      "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    email: "sperago18@wikipedia.org",
    type: "important",
    date: "10/13/2020",
  },
  {
    id: 46,
    sender: "Rasia",
    title: "Dynabox",
    content:
      "Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
    email: "rpomphrett19@shop-pro.jp",
    type: "draft",
    date: "7/2/2020",
  },
  {
    id: 47,
    sender: "Sharia",
    title: "Eabox",
    content:
      "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
    email: "sclines1a@google.fr",
    type: "draft",
    date: "8/10/2020",
  },
  {
    id: 48,
    sender: "Carolann",
    title: "Photolist",
    content:
      "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
    email: "cpundy1b@clickbank.net",
    type: "draft",
    date: "1/28/2021",
  },
  {
    id: 49,
    sender: "Fabian",
    title: "Camido",
    content:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
    email: "fpratchett1c@deliciousdays.com",
    type: "promotions",
    date: "11/14/2020",
  },
  {
    id: 50,
    sender: "Genni",
    title: "Izio",
    content:
      "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
    email: "ghaslegrave1d@google.it",
    type: "important",
    date: "3/28/2020",
  },
  {
    id: 51,
    sender: "Roosevelt",
    title: "Jaxworks",
    content:
      "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
    email: "rrysdale1e@gravatar.com",
    type: "inbox",
    date: "4/24/2020",
  },
  {
    id: 52,
    sender: "Elissa",
    title: "Kazu",
    content:
      "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
    email: "ecouser1f@senate.gov",
    type: "promotions",
    date: "7/18/2020",
  },
  {
    id: 53,
    sender: "Lissy",
    title: "Kayveo",
    content:
      "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    email: "lmaase1g@usatoday.com",
    type: "inbox",
    date: "9/9/2020",
  },
  {
    id: 54,
    sender: "Ailina",
    title: "Flashdog",
    content:
      "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
    email: "alovemore1h@wordpress.com",
    type: "important",
    date: "6/9/2020",
  },
  {
    id: 55,
    sender: "Cozmo",
    title: "Tambee",
    content:
      "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
    email: "csimons1i@gravatar.com",
    type: "draft",
    date: "5/6/2020",
  },
  {
    id: 56,
    sender: "Derril",
    title: "Trudoo",
    content:
      "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
    email: "dkillock1j@plala.or.jp",
    type: "inbox",
    date: "2/25/2021",
  },
  {
    id: 57,
    sender: "Valry",
    title: "Tavu",
    content:
      "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
    email: "vlamberteschi1k@yahoo.co.jp",
    type: "social",
    date: "7/7/2020",
  },
  {
    id: 58,
    sender: "Lucienne",
    title: "Gevee",
    content:
      "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
    email: "lsmiz1l@sciencedirect.com",
    type: "starred",
    date: "10/6/2020",
  },
  {
    id: 59,
    sender: "Margy",
    title: "Chatterpoint",
    content:
      "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
    email: "mharmson1m@macromedia.com",
    type: "inbox",
    date: "1/19/2021",
  },
  {
    id: 60,
    sender: "Juliana",
    title: "Thoughtworks",
    content:
      "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
    email: "jholdforth1n@ihg.com",
    type: "draft",
    date: "7/23/2020",
  },
  {
    id: 61,
    sender: "Darrelle",
    title: "Zoombox",
    content:
      "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
    email: "dpartington1o@cdc.gov",
    type: "promotions",
    date: "6/27/2020",
  },
  {
    id: 62,
    sender: "Emylee",
    title: "Buzzbean",
    content:
      "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
    email: "ebrideau1p@cafepress.com",
    type: "inbox",
    date: "4/14/2020",
  },
  {
    id: 63,
    sender: "Sisely",
    title: "Eazzy",
    content:
      "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
    email: "smoralis1q@chronoengine.com",
    type: "inbox",
    date: "3/9/2021",
  },
  {
    id: 64,
    sender: "Sunshine",
    title: "InnoZ",
    content:
      "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    email: "spointer1r@php.net",
    type: "starred",
    date: "7/11/2020",
  },
  {
    id: 65,
    sender: "Rori",
    title: "Zooveo",
    content:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
    email: "rwoollons1s@vinaora.com",
    type: "inbox",
    date: "9/24/2020",
  },
  {
    id: 66,
    sender: "Salim",
    title: "Linkbridge",
    content:
      "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
    email: "smowling1t@netlog.com",
    type: "promotions",
    date: "12/6/2020",
  },
  {
    id: 67,
    sender: "Duke",
    title: "Realcube",
    content:
      "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
    email: "dwearing1u@comsenz.com",
    type: "draft",
    date: "2/19/2021",
  },
  {
    id: 68,
    sender: "Billy",
    title: "Realbridge",
    content:
      "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
    email: "bdegouy1v@sciencedaily.com",
    type: "inbox",
    date: "11/8/2020",
  },
  {
    id: 69,
    sender: "Kristan",
    title: "Blogtag",
    content:
      "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
    email: "kyakuntsov1w@dagondesign.com",
    type: "starred",
    date: "8/22/2020",
  },
  {
    id: 70,
    sender: "Karry",
    title: "Skiptube",
    content:
      "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
    email: "khurdiss1x@cargocollective.com",
    type: "draft",
    date: "5/12/2020",
  },
  {
    id: 71,
    sender: "Melany",
    title: "Oodoo",
    content:
      "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
    email: "mohickey1y@cargocollective.com",
    type: "important",
    date: "12/25/2020",
  },
  {
    id: 72,
    sender: "Jayme",
    title: "Linktype",
    content:
      "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
    email: "jglisenan1z@over-blog.com",
    type: "inbox",
    date: "5/26/2020",
  },
  {
    id: 73,
    sender: "Livvy",
    title: "Gigashots",
    content:
      "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
    email: "lgermaine20@jimdo.com",
    type: "important",
    date: "1/18/2021",
  },
  {
    id: 74,
    sender: "Arabel",
    title: "Yodel",
    content:
      "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
    email: "adevany21@google.es",
    type: "promotions",
    date: "1/1/2021",
  },
  {
    id: 75,
    sender: "Osmond",
    title: "Twimm",
    content:
      "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
    email: "omcmakin22@prnewswire.com",
    type: "promotions",
    date: "2/18/2021",
  },
  {
    id: 76,
    sender: "Berkley",
    title: "Trupe",
    content:
      "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
    email: "bgabbatt23@imdb.com",
    type: "inbox",
    date: "10/12/2020",
  },
  {
    id: 77,
    sender: "Orella",
    title: "Wordtune",
    content:
      "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
    email: "osmaling24@eepurl.com",
    type: "important",
    date: "5/4/2020",
  },
  {
    id: 78,
    sender: "Andrea",
    title: "Fatz",
    content:
      "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    email: "arenzini25@bbb.org",
    type: "starred",
    date: "8/25/2020",
  },
  {
    id: 79,
    sender: "Herbie",
    title: "Skiba",
    content:
      "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
    email: "hrate26@theglobeandmail.com",
    type: "starred",
    date: "12/27/2020",
  },
  {
    id: 80,
    sender: "Klarrisa",
    title: "Camimbo",
    content:
      "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
    email: "kburde27@clickbank.net",
    type: "important",
    date: "2/22/2021",
  },
  {
    id: 81,
    sender: "Vikky",
    title: "Jayo",
    content:
      "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
    email: "vpetriello28@bizjournals.com",
    type: "important",
    date: "11/7/2020",
  },
  {
    id: 82,
    sender: "Garold",
    title: "Trunyx",
    content:
      "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
    email: "graspison29@wikia.com",
    type: "promotions",
    date: "9/12/2020",
  },
  {
    id: 83,
    sender: "Jedidiah",
    title: "Topicware",
    content:
      "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
    email: "jclimson2a@phoca.cz",
    type: "draft",
    date: "5/30/2020",
  },
  {
    id: 84,
    sender: "Jordana",
    title: "Skippad",
    content:
      "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    email: "jratlee2b@wiley.com",
    type: "starred",
    date: "7/4/2020",
  },
  {
    id: 85,
    sender: "Vin",
    title: "Shuffledrive",
    content:
      "In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
    email: "vbotger2c@wordpress.org",
    type: "inbox",
    date: "7/26/2020",
  },
  {
    id: 86,
    sender: "Henrieta",
    title: "Blogtag",
    content:
      "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    email: "hyelyashev2d@sina.com.cn",
    type: "important",
    date: "5/7/2020",
  },
  {
    id: 87,
    sender: "Lombard",
    title: "Babbleopia",
    content:
      "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
    email: "lcamis2e@xing.com",
    type: "promotions",
    date: "1/24/2021",
  },
  {
    id: 88,
    sender: "Ulises",
    title: "Camimbo",
    content:
      "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
    email: "upudan2f@wikipedia.org",
    type: "inbox",
    date: "7/9/2020",
  },
  {
    id: 89,
    sender: "Stacy",
    title: "Photobug",
    content:
      "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
    email: "stow2g@about.me",
    type: "starred",
    date: "3/1/2021",
  },
  {
    id: 90,
    sender: "Matti",
    title: "Youtags",
    content:
      "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
    email: "mraftery2h@senate.gov",
    type: "promotions",
    date: "2/3/2021",
  },
  {
    id: 91,
    sender: "Angelico",
    title: "Yata",
    content:
      "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
    email: "adufaire2i@1und1.de",
    type: "starred",
    date: "12/22/2020",
  },
  {
    id: 92,
    sender: "Ida",
    title: "Youbridge",
    content:
      "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
    email: "ipengilley2j@macromedia.com",
    type: "inbox",
    date: "12/1/2020",
  },
  {
    id: 93,
    sender: "Aindrea",
    title: "Yata",
    content:
      "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
    email: "asmale2k@last.fm",
    type: "starred",
    date: "4/23/2020",
  },
  {
    id: 94,
    sender: "Wendi",
    title: "Innojam",
    content:
      "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
    email: "wmactrusty2l@weibo.com",
    type: "inbox",
    date: "10/7/2020",
  },
  {
    id: 95,
    sender: "Sibella",
    title: "Zooxo",
    content:
      "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
    email: "ssidary2m@1und1.de",
    type: "starred",
    date: "6/28/2020",
  },
  {
    id: 96,
    sender: "Padgett",
    title: "Tavu",
    content:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    email: "piliffe2n@noaa.gov",
    type: "starred",
    date: "8/25/2020",
  },
  {
    id: 97,
    sender: "Chicky",
    title: "Quimm",
    content:
      "Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
    email: "clinsay2o@ask.com",
    type: "promotions",
    date: "2/18/2021",
  },
  {
    id: 98,
    sender: "Gualterio",
    title: "Meevee",
    content:
      "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
    email: "ggardner2p@delicious.com",
    type: "starred",
    date: "3/3/2021",
  },
  {
    id: 99,
    sender: "Kimbra",
    title: "Zazio",
    content:
      "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    email: "kbowton2q@princeton.edu",
    type: "starred",
    date: "4/21/2020",
  },
  {
    id: 100,
    sender: "Sileas",
    title: "Devpulse",
    content:
      "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
    email: "swipfler2r@deliciousdays.com",
    type: "draft",
    date: "11/1/2020",
  },
];

module.exports = mailsData;
