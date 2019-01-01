import React, { Component } from 'react';
import Info from '../components/Info';
import Signature from '../components/Signature';
import styled from 'styled-components';

class DetailStory extends Component {

  constructor() {
    super();
    this.state = {
      story : {}
    };
  }

  componentWillMount() {
    this.setState({story : {
      "id": 1,
      "title": "American Daredevil",
      "subTitle": "Kirk Jones jumped off Niagara Falls twice. The first time, he made it. The second time, he died.",
      "author": "Rachel Vorona Cote",
      "date": "Aug 24",
      "image":"https://cdn-images-1.medium.com/max/1000/1*9sCetaK23zSJmcvNXYhhUA.jpeg",
      "text":`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu hendrerit ipsum. Nam tempor, leo eget suscipit porta, nunc urna porta ante, non dapibus dolor dolor non diam. Suspendisse congue ultrices nisi quis porttitor. Nulla convallis condimentum neque at accumsan. Vivamus tempus id lorem in sollicitudin. Integer nec maximus eros. Nunc sed odio malesuada, ullamcorper odio feugiat, egestas lacus. Nam viverra, magna non vulputate venenatis, orci quam sollicitudin leo, nec rhoncus lacus erat viverra ante. Quisque faucibus arcu id dolor scelerisque ultricies. Aliquam erat volutpat. Vestibulum rutrum, erat quis dictum pulvinar, eros nisl volutpat leo, vitae fermentum enim nulla ac lacus. Phasellus nulla nulla, tincidunt a nisi id, bibendum molestie augue. Ut ligula elit, rutrum id facilisis id, pretium congue elit.
      Vivamus pellentesque lacinia ipsum, eu faucibus massa dictum ut. Ut ullamcorper enim at sem mattis consectetur. Nullam pellentesque ipsum pulvinar odio semper semper. Nulla facilisis, justo non tristique volutpat, quam mauris pulvinar enim, ac iaculis ex arcu vitae mi. Duis non porttitor lorem. Donec ut vestibulum sem. Aliquam aliquet lacus eget cursus pellentesque. Sed nec ante pulvinar, tincidunt nulla et, tincidunt eros. Phasellus aliquam lectus sit amet sapien vehicula cursus. Vestibulum lacinia enim hendrerit blandit malesuada. Nullam eu metus sagittis, iaculis purus id, mattis eros. In consectetur libero in arcu sollicitudin auctor. Morbi viverra, nisl in sagittis lobortis, justo ligula hendrerit metus, et ornare arcu nibh quis turpis. Sed nunc augue, commodo vitae odio eget, gravida efficitur nisl. Mauris condimentum luctus ullamcorper.
      Ut faucibus semper est, non volutpat arcu venenatis eget. Pellentesque eget odio dolor. Curabitur imperdiet tortor eros, non tempus orci malesuada fermentum. In nec est a ipsum convallis volutpat. Nunc luctus malesuada vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin aliquam justo vitae erat ultricies eleifend.
      Sed non purus sed risus rutrum finibus. Vivamus molestie bibendum tincidunt. Proin tristique suscipit odio sed congue. Cras congue felis nisl, ac iaculis ligula euismod sit amet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In feugiat ipsum a pharetra imperdiet. Vestibulum rhoncus arcu a imperdiet sodales. Pellentesque rhoncus vel leo eget tempus. Fusce elementum quam sed dolor tincidunt, at sollicitudin justo imperdiet.
      Suspendisse pharetra nunc at mi porttitor ornare. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer ac massa at augue molestie bibendum. Mauris dapibus libero sed est dictum, sit amet ultricies felis interdum. Suspendisse placerat nunc vitae aliquam tempus. Nullam finibus magna sed gravida ullamcorper. Maecenas eu tristique lectus. Donec sit amet sem et ante maximus dignissim. Duis eget consectetur sem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec venenatis id enim vitae cursus. Quisque interdum felis at dolor dictum, eget pellentesque diam gravida. Mauris laoreet sodales augue, in posuere nisi gravida non.
      Nam rhoncus nisi et tortor pellentesque feugiat. Nunc mollis, tortor in maximus efficitur, risus augue tristique nulla, in eleifend erat erat in metus. Nullam dignissim, dolor ut finibus aliquam, turpis enim aliquet ex, nec sodales diam diam ut dolor. Cras porta tortor libero, nec ullamcorper nisl porttitor ac. Ut dapibus enim vel felis semper commodo. Etiam eget cursus turpis, nec finibus lectus. Fusce nec leo odio. Nulla sed tempus mauris. Aenean eget ante urna. Cras eros magna, pulvinar tincidunt nisl at, aliquet placerat quam. Ut pulvinar dapibus dignissim. Nunc tincidunt a libero quis ultrices. Donec sodales ante eu velit commodo consectetur.
      `
    }});
  }

  render() {
    const { story } = this.state;
    return (
      <div>
        <Img image={story.image} />
        <Content>
          <Info title={story.title} subTitle={story.subTitle}/>
          <Signature name={story.author} date={story.date}/>
          <Text>{story.text}</Text>
        </Content>
      </div>
    );
  }
}
const Content = styled.div`
  display:flex;
  margin: 0 auto;
  width: 100%;
  max-width: 1080px;
  justify-content: space-between;
  flex-direction: column;
  padding:25px;
`;
const Img = styled.div`
  background-image: url(${props => props.image});
  height: 500px;
  background-size: cover;
`;

const Text = styled.div`
  margin-left: 12px;
  margin-top: 20px;
`;


export default DetailStory; 