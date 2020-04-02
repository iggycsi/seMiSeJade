import React, { Component } from 'react';
import { Row, Col, Badge, Button, Modal, Accordion, Card } from 'react-bootstrap';
import Cards from '../Cards/Cards';
import LeftSideBar from '../LeftSIdeBar/LeftSideBar';
import RightSideBar from '../RightSideBar/RightSideBar';
import BtnDelivery from '../BtnDelivery/BtnDelivery';
import axios from 'axios';

class FilterFood extends Component {
    constructor() {
        super();
        this.state = {
            gameLength: [],
            allGames: [],
            all: true,
            energizer: '',
            inovation: '',
            leadership: '',
            action: '',
            team: '',
            passingTags: {
                allCards: {
                    all: true
                },
                category: {
                    енергизер: false,
                    иновации: false,
                    лидерство: false,
                    акција: false,
                    тим: false
                },
                timeFrame: {
                    '30': false,
                    '60': false,
                    '120': false,
                    '240': false
                },
                groupSize: {
                    '10': false,
                    '40': false,
                    '40+': false
                }
            },
            show: false
        }

    }

    componentDidMount() {
        axios('https://brainsterboxapi.herokuapp.com/games')
            .then(data => data.data)
            .then(games => this.setState({
                gameLength: games,
                allGames: games,
                energizer: games.filter(data => data.category === "Енергизер"),
                inovation: games.filter(data => data.category === "Иновации"),
                leadership: games.filter(data => data.category === "лидерство" || data.category === "Лидерство"),
                action: games.filter(data => data.category === "Акција"),
                team: games.filter(data => data.category === "тим"),
            }))
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.passingTags !== this.state.passingTags) {
            // This part returns collectedTrueKeys by looping through category, timeFrame, groupSize, separately and pushing the keys that have values that are true to each array. 

            const collectedTrueKeys = {
                category: [],
                timeFrame: [],
                groupSize: []
            };
            const { category, timeFrame, groupSize } = this.state.passingTags;
            for (let categoryKey in category) {
                if (category[categoryKey]) collectedTrueKeys.category.push(categoryKey);
            }
            for (let timeFrameKey in timeFrame) {
                if (timeFrame[timeFrameKey]) collectedTrueKeys.timeFrame.push(timeFrameKey);
            }
            for (let groupSizeKey in groupSize) {
                if (groupSize[groupSizeKey]) collectedTrueKeys.groupSize.push(groupSizeKey);
            }

            //The part compares the two arguments, games and filters, and returns the only games that pass through the given filters.

            const filterKeys = Object.keys(collectedTrueKeys);
            let filteredData = this.state.gameLength.filter(product => {
                return filterKeys.every(key => {
                    // ignores an empty filter
                    if (!collectedTrueKeys[key].length) return true;

                    if (key === 'timeFrame' || key === 'groupSize') {
                        let card = collectedTrueKeys[key].includes(product[key].replace(/-/g, ' ').split(" ")[1]);
                        return card;
                    } else {
                        let card = collectedTrueKeys[key].includes(product[key].toLowerCase())
                        return card;
                    }
                });
            })

            this.setState({
                allGames: filteredData
            })
            if (filteredData.length === 18) {
                this.setState({
                    all: true
                })
            }
        }

    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            show: nextProps.showBtn
        })
    }

    // shouldComponentUpdate(nextProps, nextState){
    //     this.setState({
    //         show: nextProps.showBtn
    //     })
    // }
    filterGames(e, filterProp) {
        let name = e.currentTarget.dataset.name;
        //The function will search through the state, find the key called category and change the boolean value to true or false depending on the state of state. 
        console.log(name, filterProp)
        this.setState(prevState => ({
            all: false,
            passingTags: {

                ...prevState.passingTags,
                [filterProp]: {
                    ...prevState.passingTags[filterProp],
                    [name]: !prevState.passingTags[filterProp][name],

                }
            }
        }));
        if (name === 'all') {
            this.setState({
                all: true,
                passingTags: {
                    allCards: {
                        all: true
                    },
                    category: {
                        енергизер: false,
                        иновации: false,
                        лидерство: false,
                        акција: false,
                        тим: false
                    },
                    timeFrame: {
                        '30': false,
                        '60': false,
                        '120': false,
                        '240': false
                    },
                    groupSize: {
                        '10': false,
                        '40': false,
                        '40+': false
                    }

                }
            })
        }

    }
    setShow(state) {
        this.setState({
            show: state
        })
    }
    render() {
        return (
            <div className='filters '>

                {/* <Col md="9" className="d-md-block d-none allFilters">
                        <Row>
                            <Col md="6" className="browse">
                                <p>Browse by Category</p>
                                <Button data-name="енергизер" onClick={(e) => this.filterGames(e, 'category')} className={this.state.passingTags.category.енергизер ? 'btn category active' : 'btn category'}>Energizers<Badge>({this.state.energizer.length})</Badge></Button>
                                <Button data-name="иновации" onClick={(e) => this.filterGames(e, 'category')} className={this.state.passingTags.category.иновации ? 'btn category active' : 'btn category'}>Inovation<Badge>({this.state.inovation.length})</Badge></Button>
                                <Button data-name="лидерство" onClick={(e) => this.filterGames(e, 'category')} className={this.state.passingTags.category.лидерство ? 'btn category active' : 'btn category'}>Self-leadership<Badge>({this.state.leadership.length})</Badge></Button>
                                <Button data-name="акција" onClick={(e) => this.filterGames(e, 'category')} className={this.state.passingTags.category.акција ? 'btn category active' : 'btn category'}>Action<Badge>({this.state.action.length})</Badge></Button>
                                <Button data-name="тим" onClick={(e) => this.filterGames(e, 'category')} className={this.state.passingTags.category.тим ? 'btn category active' : 'btn category'}>Team<Badge>({this.state.team.length})</Badge></Button>
                                <Button data-name="all" onClick={(e) => this.filterGames(e, 'allCards')} className={this.state.all ? 'btn category active' : 'btn category'} >All<Badge>({this.state.gameLength.length})</Badge></Button>
                            </Col>
                            <Col md="3" className="browse">
                                <p>Time frame (minutes)</p>
                                <Button data-name="30" onClick={(e) => this.filterGames(e, 'timeFrame')} className={this.state.passingTags.timeFrame['30'] ? 'btn time active' : 'btn time'}>5-30</Button>
                                <Button data-name="60" onClick={(e) => this.filterGames(e, 'timeFrame')} className={this.state.passingTags.timeFrame['60'] ? 'btn time active' : 'btn time'}>30-60</Button>
                                <Button data-name="120" onClick={(e) => this.filterGames(e, 'timeFrame')} className={this.state.passingTags.timeFrame['120'] ? 'btn time active' : 'btn time'}>60-120</Button>
                                <Button data-name="240" onClick={(e) => this.filterGames(e, 'timeFrame')} className={this.state.passingTags.timeFrame['240'] ? 'btn time active' : 'btn time'}>120-240</Button>
                            </Col>
                            <Col md="3" className="browse">
                                <p>Group size</p>
                                <Button data-name="10" onClick={(e) => this.filterGames(e, 'groupSize')} className={this.state.passingTags.groupSize['10'] ? 'btn group active' : 'btn group'}>2-10</Button>
                                <Button data-name="40" onClick={(e) => this.filterGames(e, 'groupSize')} className={this.state.passingTags.groupSize['40'] ? 'btn group active' : 'btn group'}>10-40</Button>
                                <Button data-name="40+" onClick={(e) => this.filterGames(e, 'groupSize')} className={this.state.passingTags.groupSize['40+'] ? 'btn group active' : 'btn group'}>40+</Button>
                            </Col>
                        </Row>
                    </Col> */}

                <Col xs={12} className="d-md-none d-xs-block fadeInDown">
                    {/* <Button variant="primary" onClick={() => this.setShow(true)}>
                            <i className="fas fa-sliders-h"></i> Filters
                        </Button> */}

                    <Modal
                        size="lg"
                        show={this.state.show}
                        onHide={() => this.setShow(false)}
                        dialogClassName="modal-btn"
                        aria-labelledby="example-custom-modal-styling-title">

                        <Modal.Header closeButton>
                            <Modal.Title id="example-custom-modal-styling-title">
                                Filters
                                </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Accordion defaultActiveKey="0" className="mobFilters">
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="0">
                                        <i className="fas fa-plus"></i> Browse by Category
                                        </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body className="browse">
                                            <Button data-name="енергизер" onClick={(e) => this.filterGames(e, 'category')} className={this.state.passingTags.category.енергизер ? 'btn category active' : 'btn category'} block>Energizers<Badge>({this.state.energizer.length})</Badge></Button>
                                            <Button data-name="иновации" onClick={(e) => this.filterGames(e, 'category')} className={this.state.passingTags.category.иновации ? 'btn category active' : 'btn category'} block>Inovation<Badge>({this.state.inovation.length})</Badge></Button>
                                            <Button data-name="лидерство" onClick={(e) => this.filterGames(e, 'category')} className={this.state.passingTags.category.лидерство ? 'btn category active' : 'btn category'} block>Self-leadership<Badge>({this.state.leadership.length})</Badge></Button>
                                            <Button data-name="акција" onClick={(e) => this.filterGames(e, 'category')} className={this.state.passingTags.category.акција ? 'btn category active' : 'btn category'} block>Action<Badge>({this.state.action.length})</Badge></Button>
                                            <Button data-name="тим" onClick={(e) => this.filterGames(e, 'category')} className={this.state.passingTags.category.тим ? 'btn category active' : 'btn category'} block>Team<Badge>({this.state.team.length})</Badge></Button>

                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="1">
                                        <i className="fas fa-plus"></i>   Time frame (minutes)
                                        </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="1">
                                        <Card.Body className="browse">
                                            <Button data-name="30" onClick={(e) => this.filterGames(e, 'timeFrame')} className={this.state.passingTags.timeFrame['30'] ? 'btn time active' : 'btn time'} block>5-30</Button>
                                            <Button data-name="60" onClick={(e) => this.filterGames(e, 'timeFrame')} className={this.state.passingTags.timeFrame['60'] ? 'btn time active' : 'btn time'} block>30-60</Button>
                                            <Button data-name="120" onClick={(e) => this.filterGames(e, 'timeFrame')} className={this.state.passingTags.timeFrame['120'] ? 'btn time active' : 'btn time'} block>60-120</Button>
                                            <Button data-name="240" onClick={(e) => this.filterGames(e, 'timeFrame')} className={this.state.passingTags.timeFrame['240'] ? 'btn time active' : 'btn time'} block>120-240</Button>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="2">
                                        <i className="fas fa-plus"></i>  Group size
                                        </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="2">
                                        <Card.Body className="browse">
                                            <Button data-name="10" onClick={(e) => this.filterGames(e, 'groupSize')} className={this.state.passingTags.groupSize['10'] ? 'btn group active' : 'btn group'} block>2-10</Button>
                                            <Button data-name="40" onClick={(e) => this.filterGames(e, 'groupSize')} className={this.state.passingTags.groupSize['40'] ? 'btn group active' : 'btn group'} block>10-40</Button>
                                            <Button data-name="40+" onClick={(e) => this.filterGames(e, 'groupSize')} className={this.state.passingTags.groupSize['40+'] ? 'btn group active' : 'btn group'} block>40+</Button>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>

                            </Accordion>
                        </Modal.Body>
                        <Modal.Footer >
                            <Button data-name="all" onClick={(e) => this.filterGames(e, 'allCards')} className={this.state.all ? 'btn category active' : 'btn category'} >Clear All</Button>

                        </Modal.Footer>
                    </Modal>
                </Col>
                <Col md={12}>
                    <Row>
                        <Col md={2} id="bar"><LeftSideBar /></Col>
                        <Col xs={8} md={8}>
                            <BtnDelivery />
                            <Cards games={this.state.allGames} /></Col>
                        <Col md={2} id="bar">
                            <RightSideBar /></Col>
                    </Row>
                </Col>
            </div>
        );
    }
}

export default FilterFood;