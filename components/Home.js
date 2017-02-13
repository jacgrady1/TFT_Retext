import React from 'react';
import retext from 'retext';
import usage from 'retext-usage';
import report from 'vfile-reporter';
import nlcstToString from 'nlcst-to-string';
import keywords from 'retext-keywords';

class Home extends React.Component {
    render() {
        retext().use(keywords).process('As a vital part of Chinese civilization, traditional clothing plays an important role in the countrys history and culture. Chinese Suit is one of the most important style among them. It is a combination of the Manchu male jacket of the Qing Dynasty and the western style suit. It is usually straight collared, with coiled buttons down the front. Its color and design are in traditional Chinese style but tailoring is western. Four characteristics are distinctive for the Tangzhuang. The Mandarin collar with front opening is a traditional Chinese clothes style.  The opening is symmetrical and the collar stands straight up. The Chinese knots, being hand-made, are used as buttons as well as decorations. Another characteristic is the fabric, which usually is a traditional cloth such as brocaded silk. Adding the western solid cutting method and shoulder pads made the clothes fit better.',  function(err, file) {
            console.log('Keywords:');

            file.data.keywords.forEach(function(keyword) {
                console.log(nlcstToString(keyword.matches[0].node));
            });

            console.log();
            console.log('Key-phrases:');

            file.data.keyphrases.forEach(function(phrase) {
                console.log(phrase.matches[0].nodes.map(nlcstToString).join(''));
            });
        });
        return (
            <div>
            <h2>Home</h2>
            <p>Welcome to the site!</p>
        </div>
        );
    }
}

export default Home;
