class Draw extends React.Component {
    state = {
        options: ["Pierwsza wróżba", "druga wrózba", "trzecia wrózba"],
        option: null
    }
    handleShowOption = () => {
        const { options } = this.state;
        const index = Math.floor(Math.random()
            * options.length);
        this.setState({
            option: options[index]
        })
    }
    handleInputChange = () => {
        this.setState({
            value: e.target.value
        })
    }
    handleAddOption = () => {
        const { value } = this.state;
        if (value = "") return alert("wpisz coś")
        const options = [...options]
        options.push(value);
        this.setState({
            options: options,
            value: ""
        })
    }
    render() {
        const { value, option } = this.state;
        return (
            <div>
                <button
                    onClick={this.handleShowOption}>
                    Zoobacz wróżbę
               <br />
                    <input type="text"
                        value={value}
                        onChange={this.handleInputChange} />
                    <button onClick={this.handleAddOption}>
                        Dodaj wróżbę
               </button>
                    {option ? <h1>{option}</h1> : null}
                </button>
            </div>
        )
    }
}
