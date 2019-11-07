/* --- Global --- */
import {Link} from '@reach/router';
import {ColorMode, WalletConnectLogin} from 'core';
import {Login} from '3box-walletconnect-sync';

export default props => (
  <Atom.Flex alignCenter between sx={{variant: 'regions.header'}}>
    {/* Left */}
    <Atom.Flex alignCenter>
      <Link to="/">
        <Atom.Flex alignCenter>
          <Atom.Image
            sx={{
              borderRadius: 8,
              mr: 3,
              maxWidth: 22,
            }}
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxEQEhAQEBEREBAWGRIbGRESGRYREBAVGxcWGhodGxkeHiggJCYnHhkYIjItJykrLjEvGR81ODMvNygtLisBCgoKDg0OGxAQFSsdGBktKy0rNys3Ny8rNy0rKysxNystKy0tLS0tLTctNzUuLis1LS0rLjExLTcrNzcxKy03Lf/AABEIAMgAyAMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAAAQcFBggEAgP/xABIEAABAwIBCAMKCwcEAwAAAAABAAIDBBEFBgcSITFBUWETInEyQlSBkZOhsbPBFBc1UmJyc4KS0dIIFiM0Q7LCFTOD8CQlU//EABoBAQADAQEBAAAAAAAAAAAAAAABAgQFAwb/xAApEQEAAgIABAQGAwAAAAAAAAAAAQIDEQQSITEFMkFRExQiQnGxYZGh/9oADAMBAAIRAxEAPwC5UUIqqpRQiCUUIglFCIJRQtOygzmYdRTmmlfK+Rps/om6bYjwcbjXyF1aKzPYbki89BWxzxxzQvEkTwHNe3Y4L9yQLk6gNpOoAKNCUWjR52MKM/QCWS19ETllqcnZ3V7252st4U2rMd4EooRVEooRBKKEQSihEEooRBKKEQEREBERAREQEREH0zaO1ciZRm9XWE6z00/tHLrpm0dvvXImUX83V/bT+0ctfC95Xq6CzLH/ANTT/Xn9oVsWVziKGuI1H4PUezcq3zcZd4fh+GQxVM5EwdOeiY10jwC8kX3Dyr4ylzx0s0FRTw01Q7pY5GabyxgGk0i9hfiqTjtN969Ua6qVOxde4Ab0tITt6GD2bVyErhwjPY2KKGJ9CSI2MZpNl1nRaG3sWcl756WtEaTMLqRVvh+efDZLCVlTTni5okb5Wm/oW5YNlNRVn8tVQyn5gdoyfgNnehY5x2jvCumWRCEVECIiAiIgIiICIiCEREBERAREQF8SytY1z3uaxjRcucQ1rRxJOxY/KHHqeghdUVL9Bg1ADW+R25rRvK52y5y9qcUcWuJhpQerTtPV5F574+gbl648U3/CYhZGV2eSGEuiw5gqJBq6d9xA0/RG13oHaqPqp3SvfI/W97nOdbULuJJ9a/JFvx4607PSI0IrZzZ5rafEaZlZUzy6LnSAQxgM7lxbrebnduAVn4fmzwiEDRoo3njLpTE/iJHoXnbiKxOkbcr3ULsGPJigaLCipAOUMf6V+NVkdhsup9DSH/iYD5QFT5qPY5nIqlpsbg2I2EaiF0ti2Z/CZ76EUlM7jC82/C649CrzKTMnVwgvo5WVbR/Td/Cm8Xenyhelc9LG2CyYzoYjRaLXSfC4R/TnJc4D6MndD0jkrpyPy+osTAbE7oqi2unlsH/dOxw7NfJcz11FLA90U0b4pG7WPBa4eIr8Y3lpDmktcDcOBsQeIKi+GtusExEux0VO5uc6+kWUmJv1mwZVnVfgJf1eXirhWK9JpOpUmEoiKiBERAREQQiIgIiIC8GO4vDRQSVNQ7RiYNfznu3NaN5K965yzsZYnEKkwxOvSQEhltkr9jpPcOXavXFj55TEMFlllVPic5nmOiwXEcIPUhZwHPid6wkUbnua1oLnEgBrRdzidgAXy1pJAAJJ1ADWSV0TmmzctoWNq6todWuFw06xStO4fS4ndsG++29ox1X7MJm+zOtAZU4oNJ2otpAeq37Q7z9EauN9iqDKFgbVVbWgNaJpwANQAD3WAXYy46yk/nKz7ef2jl5YLza0zJDofMb8kQfXn9o5b+tAzG/JEH15/aOW/rPk80qiIioCIiDCZT5LUmIx9HVRB9u5kHVljPFrt3ZsXMeXGTzMOq5KVlQypDe+b3TNvVeNgcOXo2K1s6WdMQ6dFhzwZtYkqW6xFxaw73c93bsopziSSSSTtJ1knitmCto6z2WhCujMjlZVSk4fKx88LG3bPt+DDc153tPe7x2bK7yJyOqMUm0IhoQtI6ScjqRjhzcdwXSGTuA09BC2npmaDBrLjrfI7e5x3lOIvXXL6otLKIiLCoIiICIiCEUIpEooS6DR87+UhoqExxm09ReNttrGW/iO47NX3lzit5zx418KxKVgN46cCJvDSGt5/ESPEtPwyhfUTRQRi8kj2Mb2uNl0MNeSm3pXpC08xWRonkOJTtvHEbQtOx0o2v7G7ufYr6XgwLCo6OnhpYhZkTWtHE22k8ybnxrILHkvzW2qLkLLSikp66sjlaWO6aV2ve1z3FpHIgrr1eWqw+GUtdJFFI5vcue1rnN7CRqU48nJKYlqWZygkgwqmbK0sc7pHhp1O0XPcW3HMa/Gt3RQSqTO52hKLC1WVeHxHRkraVjuBljBHiuvVS4zSytdJFUQSMaCXOZIxzWgbSSDqTUj3E21nUFR+dPOpp6dFhzzoaxJVNOt/FsZ4cXeTicbnSzoOrC+joXFlJrD5RqdU8hvDPX2KrFqw4fWy0QLYsjsmDXSsEjzDTaQD5rX8TefqXoyUyOmqmfCpGObRtdYybOkPBvLidmtWHBC1jWsY0NYBYNGwBRn4jl+mvdyPEvFPlpilI3b/Fm4PhUFJCynp2COJuxo2k7y47yeK9qwWSWI9LF0bjd8dhzLO9PuWcWTe+rdgzVzY4yV7SlFCI9UooRBKKFKCEUIglflV1Aijkld3MbXvPY1pPuX6LXc4tR0eGYg4aj0Lm/iIb71NY3OkuYaqodK98jtbnuc4nm4kn1qw8w2EifETM4XbTxucPru6jfQXHxKt1ev7OVKBDXTb3SRsvya0n/NdDNOqPSey4kRFz1BERBiMqMoIMOp31NQ6zG6g0d3I87GtHE/nwXNmWWcCtxNzg+Qw0+6mjJDLfSPfHt8izefPKF1TXmlaf4NMA224yuALz6m+I8VXUUbnOa1oLnOIAaNZcTqAC24cURHNK0Q/Oy+muIvY2vq1bxwVtYJmRmkjD6uqFPIRfomM6Us5OdcC/YtUy6zfVOFaMjnNnpnGwmYC3Rdr6r27j6F6RlpM6iTcNPVlZr82T8QLaqrDo6IHU3uX1PZwbz37uIrVdQ5ocfNdhsJebywkxP56AGifG0t8d1XPaa16Etpdh8XQ/B2sa2EN0Qxo0WtbssAqsraYxSPidtaSO3gfIrfVe5d0+jUNf8APaPK029VvIudf3cDxzBFsUZPWv6lj8m6roqiM967qnsOz02VhKq2usQRu1+RWkx+kGu4gHygKtVPAsszS1J9Ov8Ab6RQiu7yUUIglFCICIiJFqWdj5JrbcI/asW2rXc4sHSYZiDRt6FzvwkO9ytTzQOXF0H+zx/IVHH4Q/2cS58V6/s5VQMFdDvbJG+3JzSP8Fu4jyPSVxIiLAoIiIOQ8uNL/UcQ0tvwif8AvcsnmmEZxah6S1tJ+jfZp6DtD02WXz4ZPupsQdUAfwakaQduEgADx27HfeVfQTOY5r2OLXtILXDU5rgbghdGv1Y+i3o7HWsZzxGcKr+kto9Hqv8AP0m6Hj0rKvcFz4ObGG1lKZZQP92FwYJOZaRqPYtSy+ziT4qBFoCnpWm4iadJz3a7F7t9uGxZaYL83VXUtKV6/s5X6Cv+b0kVu3QN/cqKXT+Z/J51Dh0QkGjNMTK4b26QAaD90Dxkr34idU0tLd1pGcPuoOyT1tW7qvcu6jSqAwd40eInX6rLn27OR4xaI4WYn1mP21s71Z1D/tRfUZ/aFWbW3IA2kgeVWixuiA3gAPIAq0c7wCvW8/h9IiK76UREQEREEIiIC/KrpxLHJE7ZIx7D2OaW+9fql0HIFTTuje+N2pzHOaRwLSQVYmYbFhDiJhcbNqI3NH129dvoDh41js8WC/BcSleBaOoAlbw0jqePxAnxhajhde+mmhqIzaSN7Ht7Wm66Xnp+V/R2ai8GBYpHWU8NTEbxysa4cRfaDzBuPEveucqIiIMLlZk3BiVO+mnGo62vHdxPGxzf+6xdc05YZDVuGPImjL4b9WojBMThuv8ANPI+ldYL4ewEEEAg7QdYK9MeWaJiXFYRdbVWRGGSnSfQUpdxEbW38i/HEMgcMmgdTGkhjYe+ia2ORrtxDgL3Wj5mPZPM5QBtYjUQrqzd54O4psUdwDav3Sj/AC8vFaPl9m8qcKcX656QnqztHc8BIO9PPYfQtMXrMVyQnu7NqKxjIjMXAsDdLSBuCNosd91VNbUmWR8jtriT2clWOTmWlRSxime90tJcHoib6B4sO7jbYt/oK6OdgkicHtPlB4Ebiufmx2pP8PmPHfizNY5foj9s7k1S9LUR/Nb1j4tnpst/WEyVw/ootNws+Sx5tb3o96za86xqHQ8K4acOCN97dRERWdMREQEREEIiICIiDRs72TZraIyRtvPT3kbba5lh0jfINL7q51XYa50zq5HnD6kyxNtSTklltkT9ro/eOXYtfD5PtlaJbLmJyyEMhw2d1o5DeFx2NkO1n3to534q+lxUxxBBBII1gjUQeK6KzT5xW17G0lU4NrmDU46hUtG8fS4jx9kZ8X3QTCy0RFmQIiICIiD8p4WyNcx7Q9jgQWuGk1w4EKkc4mZ8s0qrC2lzdZdSbXN5x8R9Hbw4K81CtS81ncDit7SCQQQRtB1EHgvbg2Ly0kjZYSAQQS1w0o3gbnN3hdEZws2VPiQdNDo09b/9AOpNykA/u29q55x3BaihldBVRuikG49y4cWnYRzC3UyVyRpMxFo1MOhMhsvqbEwGaoasDrQOPdc4zvHLaPStuXH8UrmOa9ji1zSCHNOi5p4g7lemajOBNXuNFVN05msc5tQNXSNbYEPHHXtG1Z8uDl6x2JjSzERFmVEREBERBCIiAiIgLwY7g8NbBJTVDdKN43d0x25zeBC96KYnQ5ZyvyYnwycwTC7TrjlA6kzOI58RuWGilcxzXscWuaQQ5ps5pGwgrqzKHAqevhdT1LNJh1hw1Pjd85p3Fc9ZbZC1OFvJcOlpiepUNHV7HjvT/wBC3Ys0WjU914lY+b7PE1wZT4odB+xtXbqP+0A2HmNXGyuGCZr2h7HNe0i4c0hzXDiCFxatgyYyzrsNP/izuDL3ML+vC77p2dosVXJw++tSYdboqdwHPpC6za6mfE7fJAekZ+E2I8pW64fnJwmcDRrYmHhLeEj8QCzTjtHeFW2osXHlHRO1ispSOUsf5r6/eCj8LpvOx/mqakZJFjf3go/C6bzsf5p+8FH4XTedj/NNSMksJlRkzS4lCYaqPSGvReNUkR4tdu9R3r0/vBR+F03nY/zT/X6Pwum87H+amNwOP6uIMkkYDcNc9t+NiQt+zFfKR+wm9bFouJEGaYjWNOTWN/WK3rMX8pH7Cb1sXQyeSVp7L/REXNUEREBERARQiCUUIglFCIJXxNE17XMe1r2OFi1wDmuHAg7V9IgqzK3M9FLpS4e8QPP9CS5hJ+i7a3sNx2Kp8dybrKF2jVU8kXB5GlG7seNRXVa+XsDgWuAc07WuGk09oK96cRavSeqYnTkBF0ri2bjC6m5dSiJx76AmH0Dq+haxWZk6Y3MNXPHye1knq0Vojiaz3W5lIWSyt5+Y9+6vZbnE79S+fiPk8Pi8079St8bH7m4VHZLK3PiQk8Pi8079SfEhJ4fF5p36k+Nj9zcKjsllbnxISeHxead+pPiQk8Pi8079SfGx+5uFSKw8xfykfsJvWxZj4j5PD4vNO/UtjyCzbPwyqNS6qZMDG9mg1jmHraOu5PJUyZaTWYiSZ6LERQiwqJRQiCUUIghERAREQEREBERAREQEREBERAREQEREBERAREQEREBERBCKUQQilEEIpRBCKUQQilEEIpRBCKUQQilEEIpRBCKUQQilEEIpRBClEQf/2Q=="
          />
          <Atom.Heading sm heavy mb={0}>
            {GLOBAL.siteName}
          </Atom.Heading>
        </Atom.Flex>
      </Link>

      {/* Menu */}
      <Atom.Flex alignCenter ml={4}>
        <Molecule.Menu
          sx={{
            m: 2,
            mx: 3,
          }}
          items={[
            {
              label: 'Assistant',
              to: '/chat',
            },
            {
              label: 'Profiles',
              to: '/developer',
            },
            {
              label: 'Search',
              to: '/search',
            },
            {
              label: 'Authentication',
              to: '/authentication',
            },
          ]}
        />
      </Atom.Flex>
      {/* Right */}
    </Atom.Flex>
    <Atom.Flex alignCenter>
      <Molecule.Menu
        styled={{
          m: 2,
          mr: 3,
        }}
        items={[
          // {
          //   label: 'Get Started',
          //   to: '/started'
          // },
          {
            label: 'About',
            to: '/about',
          },
          {
            label: 'Team',
            to: '/team',
          },
        ]}
      />
      {/* <WalletConnectLogin /> */}
      <Login />
      <ColorMode />
    </Atom.Flex>
  </Atom.Flex>
);
