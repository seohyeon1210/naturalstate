import React from 'react';
import Card from 'react-bootstrap/Card';
import MainBannerImage from '../../assets/Main/MainBanner1.png';

function MainBanner() {
    return (
        <>
            <Card>
                <Card.Img variant="top" src={MainBannerImage} />
                <Card.Body>
                    <Card.Text>
                        카드 메세지 테스트입니다.
                    </Card.Text>
                </Card.Body>
            </Card>
            {/*<br />*/}
            {/*<Card>*/}
            {/*    <Card.Body>*/}
            {/*        <Card.Text>*/}
            {/*            Some quick example text to build on the card title and make up the*/}
            {/*            bulk of the card's content.*/}
            {/*        </Card.Text>*/}
            {/*    </Card.Body>*/}
            {/*    <Card.Img variant="bottom" src={MainBannerImage} />*/}
            {/*</Card>*/}
        </>
    );
}

export default MainBanner;