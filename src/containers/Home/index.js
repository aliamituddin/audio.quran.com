import React, { Component, PropTypes } from 'react';
// import Link from 'react-router/lib/Link';
import { connect } from 'react-redux';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

@connect(
  state => ({qaris: state.qaris.entities})
)

export default class Home extends Component {
  static propTypes = {
    qaris: PropTypes.object.isRequired
  };

  render() {
    const { qaris } = this.props;

    return (
      <Grid>
        <Row>
          <Col md={12}>
            <h4>
              Welcome to QuranicAudio.com, your source for high quality recitations of the Quran. All the Quran recitations on this site are in high quality and are free for download and streaming as mp3s. Please enjoy your stay, contact us with your suggestions, tell your friends about the site, and don't forget us in your prayers!
            </h4>
          </Col>
        </Row>
        <Row>
          {
            Object.values(qaris).map(qari => {
              return (
                <Col md={6} key={qari.id}>
                  {qari.name}
                </Col>
              );
            })
          }
        </Row>
      </Grid>
    );
  }
}
