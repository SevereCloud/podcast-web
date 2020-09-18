function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from '../../web_modules/react.js';
import { Button, Checkbox, Div, FixedLayout, FormLayout, Input, PanelHeader, PanelHeaderBack, Placeholder, Separator, Textarea, File, SimpleCell, Caption, ActionSheet, ActionSheetItem } from '../../web_modules/@vkontakte/vkui.js';
import { Icon24Chevron, Icon28PodcastOutline, Icon56GalleryOutline } from '../../web_modules/@vkontakte/icons.js';
import { descriptionPodcastAccess, namePodcastAccess } from '../types.js';
import CoverLoader from '../components/CoverLoader/CoverLoader.js';
import { timeFormat } from '../lib.js';
export class Creating extends React.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "setPodcast", podcast => {
      const newPodcast = Object.assign({}, this.state.podcast, podcast);
      this.setState({
        podcast: newPodcast
      });
    });

    _defineProperty(this, "change", input => {
      if (input.target.files && input.target.files[0]) {
        const originalAudioName = input.target.files[0].name;
        const reader = new FileReader();

        reader.onload = e => {
          const audio = document.createElement('audio');

          if (e.target && typeof e.target.result === 'string') {
            audio.src = e.target.result;

            audio.onloadedmetadata = () => {
              this.setPodcast({
                originalDuration: audio.duration
              });
            };

            const context = new window.AudioContext();
            const source = context.createMediaElementSource(audio);
            this.setPodcast({
              audioComponent: audio,
              audioSource: source,
              originalAudioName: originalAudioName
            });
          }
        };

        const audioFile = input.target.files[0];
        reader.readAsDataURL(audioFile);
        this.setPodcast({
          audioFile
        });
      }
    });

    this.state = {
      podcast: props.podcast
    };
    this.openAccess = this.openAccess.bind(this);
    this.change = this.change.bind(this);
  }

  get isValid() {
    const {
      podcast
    } = this.state;
    return [podcast.image, podcast.name, podcast.description, podcast.audioSource].every(e => e);
  }

  openAccess() {
    this.props.setPopout( /*#__PURE__*/React.createElement(ActionSheet, {
      onClose: () => this.props.setPopout(null),
      iosCloseItem: /*#__PURE__*/React.createElement(ActionSheetItem, {
        autoclose: true,
        mode: "cancel"
      }, "\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C") // @ts-ignore
      ,
      toggleRef: /*#__PURE__*/React.createRef()
    }, /*#__PURE__*/React.createElement(ActionSheetItem, {
      autoclose: true,
      onClick: () => this.setPodcast({
        access: 'all'
      })
    }, namePodcastAccess['all']), /*#__PURE__*/React.createElement(ActionSheetItem, {
      autoclose: true,
      onClick: () => this.setPodcast({
        access: 'admins-only'
      })
    }, namePodcastAccess['admins-only'])));
  }

  render() {
    const {
      setPanel,
      goBack,
      updatePodcast
    } = this.props;
    const {
      podcast
    } = this.state;
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PanelHeader, {
      left: /*#__PURE__*/React.createElement(PanelHeaderBack, {
        onClick: () => goBack()
      })
    }, "\u041D\u043E\u0432\u044B\u0439 \u043F\u043E\u0434\u043A\u0430\u0441\u0442"), /*#__PURE__*/React.createElement(FormLayout, null, /*#__PURE__*/React.createElement(FormLayout, {
      className: "FormLayoutRow"
    }, /*#__PURE__*/React.createElement(CoverLoader, {
      image: podcast.image,
      onLoadImage: image => this.setPodcast({
        image: image
      }),
      before: /*#__PURE__*/React.createElement(Icon56GalleryOutline, {
        width: 32,
        height: 32
      })
    }), /*#__PURE__*/React.createElement(Input, {
      top: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435",
      placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043F\u043E\u0434\u043A\u0430\u0441\u0442\u0430",
      value: podcast.name,
      onChange: e => this.setPodcast({
        name: e.target.value
      })
    })), /*#__PURE__*/React.createElement(Textarea, {
      top: "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u043F\u043E\u0434\u043A\u0430\u0441\u0442\u0430",
      placeholder: "",
      value: podcast.description,
      onChange: e => this.setPodcast({
        description: e.target.value
      })
    })), podcast.audioSource ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement(SimpleCell, {
      style: {
        cursor: 'pointer'
      },
      disabled: true,
      before: /*#__PURE__*/React.createElement("div", {
        className: "PodcastIcon"
      }, /*#__PURE__*/React.createElement(Icon28PodcastOutline, null)),
      after: /*#__PURE__*/React.createElement("div", {
        style: {
          color: 'var(--text_secondary)'
        }
      }, timeFormat(podcast.originalDuration))
    }, podcast.originalAudioName), /*#__PURE__*/React.createElement("input", {
      className: "LoadFile",
      type: "file",
      accept: "audio/*",
      onChange: this.change
    })), /*#__PURE__*/React.createElement(Div, null, /*#__PURE__*/React.createElement(Caption, {
      level: "1",
      weight: "regular",
      style: {
        color: 'var(--text_secondary)'
      }
    }, "\u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0442\u0430\u0439\u043C\u043A\u043E\u0434\u044B \u0438 \u0441\u043A\u043E\u0440\u0440\u0435\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043F\u043E\u0434\u043A\u0430\u0441\u0442 \u0432 \u0440\u0435\u0436\u0438\u043C\u0435 \u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F")), /*#__PURE__*/React.createElement(Div, null, /*#__PURE__*/React.createElement(Button, {
      stretched: true,
      size: "l",
      mode: "outline",
      onClick: () => {
        updatePodcast(podcast);
        setPanel('edit');
      }
    }, "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0430\u0443\u0434\u0438\u043E\u0437\u0430\u043F\u0438\u0441\u044C"))) : /*#__PURE__*/React.createElement(Placeholder, {
      header: "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u0432\u0430\u0448 \u043F\u043E\u0434\u043A\u0430\u0441\u0442",
      action: /*#__PURE__*/React.createElement(File, {
        controlSize: "m",
        mode: "outline",
        accept: "audio/*",
        onChange: this.change
      }, "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0444\u0430\u0439\u043B")
    }, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0433\u043E\u0442\u043E\u0432\u044B\u0439 \u0430\u0443\u0434\u0438\u043E\u0444\u0430\u0439\u043B \u0438\u0437", /*#__PURE__*/React.createElement("br", null), "\u0432\u0430\u0448\u0435\u0433\u043E \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430 \u0438 \u0434\u043E\u0431\u0430\u0432\u044C\u0442\u0435 \u0435\u0433\u043E"), /*#__PURE__*/React.createElement(Separator, null), /*#__PURE__*/React.createElement(FormLayout, null, /*#__PURE__*/React.createElement(Checkbox, {
      style: {
        margin: '-12px 0px',
        padding: '12px 0px'
      },
      checked: podcast.explicitContent,
      onChange: e => this.setPodcast({
        explicitContent: e.target.checked
      })
    }, "\u041D\u0435\u043D\u043E\u0440\u043C\u0430\u0442\u0438\u0432\u043D\u044B\u0439 \u043A\u043E\u043D\u0442\u0435\u043D\u0442"), /*#__PURE__*/React.createElement(Checkbox, {
      style: {
        margin: '-12px 0px',
        padding: '12px 0px'
      },
      checked: podcast.notExport,
      onChange: e => this.setPodcast({
        notExport: e.target.checked
      })
    }, "\u0418\u0441\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u044D\u043F\u0438\u0437\u043E\u0434 \u0438\u0437 \u044D\u043A\u0441\u043F\u043E\u0440\u0442\u0430"), /*#__PURE__*/React.createElement(Checkbox, {
      style: {
        margin: '-12px 0px',
        padding: '12px 0px'
      },
      checked: podcast.trailer,
      onChange: e => this.setPodcast({
        trailer: e.target.checked
      })
    }, "\u0422\u0440\u0435\u0439\u043B\u0435\u0440 \u043F\u043E\u0434\u043A\u0430\u0441\u0442\u0430")), /*#__PURE__*/React.createElement(SimpleCell, {
      style: {
        marginTop: 14
      },
      after: /*#__PURE__*/React.createElement(Icon24Chevron, null),
      description: namePodcastAccess[podcast.access],
      onClick: this.openAccess
    }, "\u041A\u043E\u043C\u0443 \u0434\u043E\u0441\u0442\u0443\u043F\u0435\u043D \u0434\u0430\u043D\u043D\u044B\u0439 \u043F\u043E\u0434\u043A\u0430\u0441\u0442"), /*#__PURE__*/React.createElement(Div, {
      style: {
        paddingTop: 4,
        paddingBottom: 24,
        color: 'var(--icon_tertiary)'
      }
    }, /*#__PURE__*/React.createElement(Caption, {
      level: "1",
      weight: "regular"
    }, descriptionPodcastAccess[podcast.access])), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 68
      }
    }), /*#__PURE__*/React.createElement(FixedLayout, {
      filled: true,
      vertical: "bottom"
    }, /*#__PURE__*/React.createElement(Div, null, /*#__PURE__*/React.createElement(Button, {
      stretched: true,
      size: "l",
      disabled: !this.isValid,
      onClick: () => {
        updatePodcast(podcast);
        setPanel('preview');
      }
    }, "\u0414\u0430\u043B\u0435\u0435"))));
  }

}
//# sourceMappingURL=Creating.js.map
