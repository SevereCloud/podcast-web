import React from '../web_modules/react.js';
import { Panel, Root, View } from '../web_modules/@vkontakte/vkui.js';
import { Main } from './panels/Main.js';
import { defaultPodcast } from './types.js';
import { Creating } from './panels/Creating.js';
import { Preview } from './panels/Preview.js';
import { Edit } from './panels/Edit.js';
import { MusicChoose } from './panels/MusicChoose.js';
export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scheme: 'bright_light',
      activeView: 'main',
      activePanel: {
        main: 'main'
      },
      popout: null,
      history: [{
        view: 'main',
        panel: 'main'
      }],
      podcast: defaultPodcast,
      podcastDone: false
    };
    this.setView = this.setView.bind(this);
    this.setPanel = this.setPanel.bind(this);
    this.setPopout = this.setPopout.bind(this);
    this.goBack = this.goBack.bind(this);
  }

  componentDidMount() {
    const {
      vkAPI
    } = this.props;
    vkAPI.onUpdateConfig(data => {
      const schemeAttribute = document.createAttribute('scheme');
      schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
      this.setState({
        scheme: data.scheme
      });
      document.body.attributes.setNamedItem(schemeAttribute);
    });
    vkAPI.initApp();
  }

  setView(view, name = 'main') {
    const panel = { ...this.state.activePanel
    };
    panel[view] = name;
    const newHistory = [...this.state.history, {
      view: view,
      panel: name
    }];
    this.setState({
      activeView: view,
      activePanel: panel,
      history: newHistory
    });
  }

  setPanel(name) {
    const panel = { ...this.state.activePanel
    };
    panel[this.state.activeView] = name;
    const newHistory = [...this.state.history, {
      view: this.state.activeView,
      panel: name
    }];
    this.setState({
      activePanel: panel,
      history: newHistory
    });
  }

  setPopout(popout) {
    this.setState({
      popout: popout
    });
  }

  goBack() {
    const newHistory = [...this.state.history];
    newHistory.pop();
    const {
      view,
      panel
    } = newHistory[newHistory.length - 1];
    const p = { ...this.state.activePanel
    };
    p[view] = panel;
    this.setState({
      activeView: view,
      activePanel: p,
      history: newHistory
    });
  }

  render() {
    const {
      activeView,
      activePanel,
      popout,
      podcast,
      podcastDone
    } = this.state;
    return /*#__PURE__*/React.createElement(Root, {
      activeView: activeView,
      popout: popout
    }, /*#__PURE__*/React.createElement(View, {
      id: "main",
      activePanel: activePanel['main']
    }, /*#__PURE__*/React.createElement(Panel, {
      id: "main"
    }, /*#__PURE__*/React.createElement(Main, {
      setPanel: this.setPanel,
      podcastDone: podcastDone
    })), /*#__PURE__*/React.createElement(Panel, {
      id: "creating"
    }, /*#__PURE__*/React.createElement(Creating, {
      setPanel: this.setPanel,
      setPopout: this.setPopout,
      goBack: this.goBack,
      podcast: podcast,
      updatePodcast: p => {
        this.setState({
          podcast: p
        });
      }
    })), /*#__PURE__*/React.createElement(Panel, {
      id: "edit"
    }, /*#__PURE__*/React.createElement(Edit, {
      setPanel: this.setPanel,
      goBack: this.goBack,
      podcast: podcast,
      updatePodcast: p => {
        this.setState({
          podcast: p
        });
      }
    })), /*#__PURE__*/React.createElement(Panel, {
      id: "music-choose"
    }, /*#__PURE__*/React.createElement(MusicChoose, {
      choseAudio: audio => {
        this.setState({
          chosenMusic: audio
        });
        this.goBack();
      },
      goBack: this.goBack
    })), /*#__PURE__*/React.createElement(Panel, {
      id: "preview"
    }, /*#__PURE__*/React.createElement(Preview, {
      setPanel: this.setPanel,
      goBack: this.goBack,
      podcast: podcast,
      publishPodcast: () => {
        this.setPanel('main');
        this.setState({
          podcast: defaultPodcast,
          podcastDone: true,
          history: [{
            view: 'main',
            panel: 'main'
          }]
        });
      }
    }))));
  }

}
//# sourceMappingURL=App.js.map
