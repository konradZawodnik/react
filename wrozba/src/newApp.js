class Draw extends React.Component {
    state = {
        options: ["Pierwsza wróżba", "druga wrózba", "trzecia wrózba"],
        option: null
    }
    handleShowOption = () => {
        const index = Math.floor(Math.random()
            * this.state.options.length);
        this.setState({
            option: this.state.options[index]
        })
    }
    handleInputChange = () => {
        this.setState({
            value: e.target.value
        })
    }
    handleAddOption = () => {
        if (this.state.value = "") return alert("wpisz coś")
        const options = [...this.state.options]
        options.push(this.state.value);
        this.setState({
            options: options,
            value:""
        })
    }
    render() {
        return (
            <div>
                <button
                    onClick={this.handleShowOption}>
                    Zoobacz wróżbę
               <br />
                    <input type="text"
                        value={this.state.value}
                        onChange={this.handleInputChange} />
                    <button onClick={this.handleAddOption}>
                        Dodaj wróżbę
               </button>
                    {this.state.option ? <h1>{this.state.option}</h1> : null}
                </button>
            </div>
        )
    }
}
