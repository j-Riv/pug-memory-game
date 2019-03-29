import React from 'react';
import ScoreBoard from '../components/ScoreBoard';
import Container from 'react-bootstrap/Container';
import VerticallyCenteredModal from '../components/VerticallyCenteredModal';
import Row from 'react-bootstrap/Row';
import ImgCard from '../components/ImgCard';

const images = [
    { id: 1, src: "/images/henry/henry-1.jpg" },
    { id: 2, src: "/images/henry/henry-2.jpg" },
    { id: 3, src: "/images/henry/henry-3.jpg" },
    { id: 4, src: "/images/henry/henry-4.jpg" },
    { id: 5, src: "/images/henry/henry-5.jpg" },
    { id: 6, src: "/images/henry/henry-6.jpg" },
    { id: 7, src: "/images/henry/henry-7.jpg" },
    { id: 8, src: "/images/henry/henry-8.jpg" },
    { id: 9, src: "/images/henry/henry-9.jpg" },
    { id: 10, src: "/images/henry/henry-10.jpg" },
    { id: 11, src: "/images/henry/henry-11.jpg" },
    { id: 12, src: "/images/henry/henry-12.jpg" }
];

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: this.shuffleArray(images.slice()),
            selected: [],
            correct: 0,
            showLoss: false,
            showWin: false
        }
    }

    onCardClick(id) {
        const { selected, correct } = this.state;

        if (selected.length === 0) { // selecting a first card
            this.setState({ 
                cards: this.shuffleArray(images.slice()),
                selected: [id],
                correct: parseInt(correct) + 1,
                showLoss: false,
                showWin: false
            });
        } else { // they're selecting a second card
            if (this.state.selected.includes(id)) { // Game Over
                this.setState({
                    cards: this.shuffleArray(images.slice()),
                    selected: [],
                    correct: 0,
                    showLoss: true
                });
            } else {
                this.setState({
                    cards: this.shuffleArray(images.slice()),
                    selected: selected.concat([selected, id]),
                    correct: parseInt(correct) + 1
                });
            }
        }
    }

    componentDidUpdate = () => {
        // check if won
        if (this.state.correct === 12) {
            this.setState({
                selected: [],
                correct: 0,
                showLoss: false,
                showWin: true
            });
        }
    };

    // Probably in a different file
    shuffleArray = array => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    render() {
        const closeLoss = () => this.setState({ showLoss: false });
        const closeWin = () => this.setState({ showWin: false });
        return (
            <div>
                <ScoreBoard>
                    <span>Score: {this.state.correct} | 12</span>
                </ScoreBoard>
                <Container style={{ marginTop: 100 }}>
                    <Row>
                        {this.state.cards.map((img, key) =>
                            <ImgCard 
                                key={img.id}
                                img={img}
                                onSelect={() => this.onCardClick(img.id)}
                            />
                        )}
                    </Row>
                </Container>

                <VerticallyCenteredModal
                    show={this.state.showLoss}
                    onHide={closeLoss}
                    heading="You Lose!"
                >
                    Better Luck Next Time...
                </VerticallyCenteredModal>

                <VerticallyCenteredModal
                    show={this.state.showWin}
                    onHide={closeWin}
                    heading="You Won!"
                >
                    You have a beautiful mind...
                </VerticallyCenteredModal>

            </div>
        );
    };
}

export default Game;