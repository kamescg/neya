import {RegionTop, RegionFooter} from 'core';
import {Menu} from '@horizin/design-system-molecules';
import {TokenBalance} from 'core';
const styles = {
  container: {
    bg: 'paper',
    color: 'text',
    minHeight: '100vh',
    overflow: 'hidden',
    flex: 1,
  },
  aside: {
    bg: 'neutral',
    boxShadow: 2,
    color: 'text',
    flex: [3, 3, 4, 2],
    p: [3, 3, 4, 4],
    zIndex: 1000,
  },
  hr: {
    width: '100%',
    my: 3,
  },
  main: {
    flex: 12,
    overflow: 'auto',
    zIndex: 50,
  },
};
const SiteTemplate = ({sx, sxMain, styled, children, ...props}) => {
  return (
    <A.Flex column sx={styles.container}>
      <Atom.Flex sx={{flex: 1}}>
        <Atom.Flex column sx={styles.aside}>
          <Atom.Flex center column>
            <Atom.Span>beta</Atom.Span>
            <Molecule.Link to="/">
              <Atom.Heading giga heavy>
                NΞYA
              </Atom.Heading>
            </Molecule.Link>
            {/* <Atom.Heading sm thin>
              cerebellum - <Atom.Span heavy>beta</Atom.Span>
            </Atom.Heading> */}
            <Atom.Heading sm thin>
              jobs/bank for the developers
            </Atom.Heading>
            <Atom.HorizontalRule sx={styles.hr} />
            <TokenBalance
              img="https://instadapp.io/dashboard/img/icons/tokens/eth.svg"
              label="ETH"
              value="22"
            />
            <TokenBalance
              img="https://instadapp.io/earn/img/icons/tokens/dai.svg"
              label="DAI"
              value="1,000"
            />
            <TokenBalance
              img="https://i1.wp.com/nigeriabitcoincommunity.com/wp-content/uploads/2019/08/usd-coin-usdc-logo.png?resize=368%2C368&ssl=1"
              label="USDC"
              value="2,000"
            />
            <Atom.HorizontalRule sx={styles.hr} />
          </Atom.Flex>
          <Molecule.Menu
            expanded
            direction="column"
            sx={{
              fontSize: 2,
              my: 1,
              flexDirection: 'column',
            }}
            sxChildren={{
              fontSize: 1,
              my: 1,
              flexDirection: 'column',
            }}
            items={menu}
          />
        </Atom.Flex>
        <Atom.Flex column sx={styles.main}>
          <RegionTop
            bg="#1e1e2d"
            color="white"
            borderBottom="3px solid #dc448d"
            p={2}
          />
          <A.Flex column sx={{flex: 1, ...sxMain}}>
            {children}
          </A.Flex>
          <RegionFooter
            bg="#1e1e2d"
            color="white"
            borderTop="2px solid #dc448d"
            p={3}
          />
        </Atom.Flex>
      </Atom.Flex>
    </A.Flex>
  );
};

SiteTemplate.defaultProps = {
  styled: {},
};
// createRef;
SiteTemplate.propTypes = {
  styled: PropTypes.object,
};

const stylesMenu = {
  img: {
    borderRadius: 9999,
    boxShadow: 1,
    maxWidth: 44,
  },
};

const menu = [
  {
    label: 'Search',
    to: '/search',
  },
  {
    label: 'Jobs',
    to: '/jobs',
    children: [
      {
        image: (
          <Atom.Image
            sx={stylesMenu.img}
            src="https://d2.alternativeto.net/dist/icons/gitcoin_134717.jpg?width=200&height=200&mode=crop&upscale=false"
          />
        ),
        label: 'Gitcoin',
        to: '/networks/gitcoin',
      },
      {
        label: 'Bounties Network',
        to: '/networks/bounties-network',
        image: (
          <Atom.Image
            sx={stylesMenu.img}
            src="https://pbs.twimg.com/profile_images/1044169757015060480/SrCrODtZ_400x400.jpg"
          />
        ),
      },
    ],
  },
  {
    label: 'Banking',
    to: '/protocols',
    children: [
      {
        label: 'MakerDAO',
        to: '/interest/compound',
        image: (
          <Atom.Image
            sx={stylesMenu.img}
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAnFBMVEX///9UaXkavJyKmKNg0LrX2dqC2si50cyRn6givp/8/Pxgc4Lr8vBVzbXa3+I5xalsfovu8PGd4tR7i5hCx632/Pvj5ea4wcfK29habn1v1MD29/jO8Oq56uHM0tfi9vKeqrKtwcWr1s3C7eTV4+Cfq7SvucDDxsjr+fbC5uOs5tt9wLN/j5tzhJGczsWI28yrx8K8wsuJ0MiYzb3mcOLkAAAEA0lEQVR4nO2c23qiMBRGd/AItBWsYpXWcdp6mI6t05n3f7dREXfUKKck3PzrEihkfT87JClIBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaOT55a7uJuzwHqZhpRO0Haf3Q1NjqjATIqhi0ne2uJOOtgaVIv65Flv8h/Kn6DkJfX2tKk7ki4Ru+XO4BxH3RV+7iuI9HjxEo/xJUhHHaQ/1Na0Q4dFDj4jTe9XXuPxE3bHQLFJLKGEghH4RZ2D7kTL1hRERZ9Dx9LUyk3AmhF4RSWdg7+koxeFrEmm+sYr7rq+pt/DmnMRjqEskecIfMrFT8gvJwyNtIvQ0OYbitqsN3/Kw7B41gvn2cvpEiFY9e6FIccz33YtOEfplreSn/BCcJVu0itAbZ+J+VG3sdTyp113HyTa9IjT8zaFMTD0cR9zrfi7TjZpFtvNF06Go4iADIrRqcigGTMJP9lhIowj9IkRfUj+s+eHoLdmjEcl7TIichDLROfaK5DhOdxkRIbpnk035c5/T4k533DrbZ0jkTip5bbP5WMpjdL7TkAgN/3Aog36s+suCtObHXtfvTi92mxKh/YJXimp3QZachnL5yqDIUCr5ZtWxVyTNBC/jIKMi2wEx317uV/lLbG+rxtHCX0TKQ4yK6AolMw4yLULU55lj77nkJUbc6wZX10RNi9CzNAd+KnMBj2dQonG9+zMuQu98e7mb4gPi1loqjxvHmRc5GRA7BUPJGQfZEaHhgAtlVejs0kLJrTjIkghFbR4QT3KHEo+41w2WGQfbETkJJe8sRV7VvRhaXWBLhJ6k3itfP8xxiHn20dZETko+x4A4ljxul3mCPRHyOnx7NbP64cXxYT6enU89lFgU2c5SBjlDkeP4ztcOqyI0nLDJ/fWx1wOX+Ti7zBPsihBJo8j2tWOmHEf+/zfbFon7fHvdv6pCibg8RCNXeeyxLbLlQxoQX9a8tDodqGceamoQoY1UKOf7vtnjs9BMvw4Rr8OV0uvL617h7Dj18GdF8qhHhE5Ckd5i8YKScVBtIh73w395a8S9bv4qP1CTiFTy0kpk65hHsdtqR20idDe5eJwcRIJlifXi+kSoc02k1LtKEEmBCETUQCQFIhBRA5EUiEBEDURSIAIRNRBJgQhE1EAkBSIQUQORFIhARA1EUiACETUQSYEIRNRAJAUiEFEDkRSIQEQNRFIgAhE1lUWSTw3LfI/7noj84y1hBZHkU6yMz35usdpFcvH6bi727wK68jvMo31rCr+YuSPcvWi7LtWOA/3SPx4y3LjO4PSjmNFY+Nc+mcxgIcRjtY+b47vy395fvFIel/9pmDi0+ftLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACu8h9f+jnjqdqtEAAAAABJRU5ErkJggg=="
          />
        ),
      },
      {
        label: 'Compound',
        to: '/interest/compound',
        image: (
          <Atom.Image
            sx={stylesMenu.img}
            src="data:image/png;base64,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"
          />
        ),
      },
      {
        label: 'Dharma',
        to: '/interest/dharma',
        image: (
          <Atom.Image
            sx={stylesMenu.img}
            src="data:image/jpeg;base64,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"
          />
        ),
      },
    ],
  },
  {
    label: 'Credit',
    to: '/credit',
    children: [
      {
        label: 'Borrow',
        to: '/lending',
      },
    ],
  },
  {
    label: 'Savings',
    to: '/assistant',
    children: [
      {
        label: 'Lending',
        to: '/lending',
      },
      {
        label: 'Leveraging',
        to: '/leveraging',
      },
    ],
  },
];

export default SiteTemplate;
