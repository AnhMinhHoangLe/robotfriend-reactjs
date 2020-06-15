import React, { Component } from "react";
import { robots } from "../robots";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";

class App extends Component {
    // this will summarize the included var by constructor
    constructor() {
        //to call the constructor of component
        super();
        //to call the state, can change and affect
        this.state = {
            robots: [],
            searchfield: "",
        };
    }
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                return response.json();
            })
            .then((users) => {
                this.setState({ robots: users }); //to update the robots
            });
    }
    //this one is to update the variable of searchfield,
    //you need to use setState
    //very time the input changes, just like we did with DOM manipulation,
    //we get an event, and within this event I'm going to "console.log" this event
    onSearchChange = (event) => {
        // schedules an update to a component's state object. When state
        //changes, the component responds by re-rendering.
        this.setState({
            searchfield: event.target.value,
        });
    };
    // console.log(event.target.value);
    render() {
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter((robot) => {
            // The includes() method determines whether a string
            //contains the characters of a specified string.
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        });
        return !robots.length ? (
            <h1 className='tc'>Loading ...</h1>
        ) : (
            <div className='tc'>
                <h1 className='f1'>Robot Friends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                    <CardList robots={filteredRobots} />
                </Scroll>
                {/* this one is for access to the robots */}
            </div>
        );
    }
}
export default App;
