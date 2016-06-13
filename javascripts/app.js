(function() {

  const Box = React.createClass({
    propTypes: {
      brand: React.PropTypes.string.isRequired,
      batteryType: React.PropTypes.string,
      numOfBatteries: React.PropTypes.number,
      numOfDecks: React.PropTypes.number
    },

    getInitialState() {
      return {
        hasBatteries: true
      }
    },

    getDefaultProps() {
      console.log('I AM STARTING MY LIFE');
      return {
        batteryType: 'D',
        numOfBatteries: 6,
        numOfDecks: 1
      }
    },

    componentWillMount() {
      console.log('I will mount!');
    },

    componentDidMount() {
      console.log('I DID mount!');
    },

    componentWillUpdate() {
      console.log('I will update!');
    },

    componentDidUpdate() {
      console.log('I DID update!');
    },

    componentWillReceiveProps() {
      console.log('I will receive props!');
    },

    removeBatteries() {
      console.log('I am taking out the batteries!');
      this.setState({ hasBatteries: false })
    },

    render() {
      let brandName = this.props.brand.toUpperCase()
      let decks = []
      for (var i = 0; i < this.props.numOfDecks; i++) {
        decks.push(<TapeDeck key={ "deck-" + i } cassette="Purple Rain" canPlay={ this.state.hasBatteries }/>)
      }

      return <div className="boom-box">
        <div className="nameplate">{ brandName }</div>
        { decks }
        { this.props.children }
        <div className="battery-case" onClick={ this.removeBatteries }>
          <p>I have { this.props.numOfBatteries } {this.props.batteryType} batteries.</p>
        </div>
      </div>
    }
  })

  const TapeDeck = React.createClass({

    propTypes: {
      cassette: React.PropTypes.string,
      canPlay: React.PropTypes.bool.isRequired
    },

    getInitialState() {
      return {
        playing: false
      }
    },

    componentWillUpdate() {
      console.log('I will update!');
    },

    componentDidUpdate() {
      console.log('I DID update!');
    },

    togglePlay() {
      this.setState({ playing: !this.state.playing })
    },

    render() {
      let playState = this.props.canPlay ?
        <span>{ this.state.playing ? "puuurple rain..." : "" }</span> :
        null
      return <div className="tape-deck">
        <div className="window">
          { this.props.cassette || 'empty' }
          { playState }
        </div>
        <button onClick={ this.togglePlay }>play</button>
      </div>
    }
  })


  let myBox = <Box numOfBatteries={ 10 } numOfDecks={ 2 } brand="sony">
    <p>BOOM BOOM BOOM</p>
  </Box>

  ReactDOM.render(
    myBox, document.getElementById('container')
  );

})()
