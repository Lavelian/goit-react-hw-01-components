import PropTypes from 'prop-types';
import {
  Container,
  Description,
  ProfileImg,
  DescriptionInfo,
  StatsList,
  StatsItem,
  StatsQuantity,
  StatsLabel,
} from './Profile.styled';

export default function Profile({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) {
  return (
    <Container>
      <Description>
        <ProfileImg src={avatar} alt="User avatar" />
        <DescriptionInfo>{username}</DescriptionInfo>
        <DescriptionInfo>@{tag}</DescriptionInfo>
        <DescriptionInfo>{location}</DescriptionInfo>
      </Description>

      <StatsList>
        <StatsItem>
          <StatsLabel>Followers</StatsLabel>
          <StatsQuantity>{followers}</StatsQuantity>
        </StatsItem>
        <StatsItem>
          <StatsLabel>Views</StatsLabel>
          <StatsQuantity>{views}</StatsQuantity>
        </StatsItem>
        <StatsItem>
          <StatsLabel>Likes</StatsLabel>
          <StatsQuantity>{likes}</StatsQuantity>
        </StatsItem>
      </StatsList>
    </Container>
  );
}

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
