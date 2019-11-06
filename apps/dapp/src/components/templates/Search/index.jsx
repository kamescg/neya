import {Link} from '@reach/router';
import {RegionTop, RegionFooter} from 'core';
import {Menu} from '@horizin/design-system-molecules';

const styles = {
  dashboard: {
    flex: 1,
    width: '100%',
  },
};

const SearchTemplate = ({sx, children, ...props}) => {
  return (
    <Atom.Flex column sx={{minHeight: '100vh', flex: 1, ...sx}}>
      <RegionTop
        bg="#1e1e2d"
        color="white"
        borderBottom="3px solid #dc448d"
        p={2}
      />

      <Atom.Flex sx={styles.dashboard}>
        {/* Aside Region */}
        <Atom.Flex sx={{bg: 'cobalt', color: 'white', flex: 2}}>
          <Atom.BackgroundGradient gradient="blue" />
          <Atom.BackgroundImage
            sx={{
              backgroundSize: 'cover',
              backgroundPosition: 'center left',
            }}
            src="https://s.gitcoin.co/static/v2/images/header-bg.png"
          />

          <Atom.Flex between column flex={1}>
            <Atom.Box sx={{p: 3, flex: 10}}>
              <Menu
                direction="column"
                sx={{
                  my: 1,
                  flexDirection: 'column',
                }}
                items={menu}
              />
            </Atom.Box>
            <Atom.Box>
              <Atom.BackgroundGradient gradient="white" opacity={0.05} />
              {/* <RegionFooterDashboard /> */}
            </Atom.Box>
          </Atom.Flex>
        </Atom.Flex>

        {/* Main Region */}
        <Atom.Flex column sx={{flex: 10}}>
          <Atom.Flex column flex={112} width="100%" {...props.styled}>
            {children}
          </Atom.Flex>
        </Atom.Flex>
      </Atom.Flex>
      <RegionFooter />
    </Atom.Flex>
  );
};

SearchTemplate.defaultProps = {
  styled: {},
};

SearchTemplate.propTypes = {
  styled: PropTypes.object,
};

const ImageCommunications = (
  <Atom.Image
    src="data:image/svg+xml;base64,
PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgY2xhc3M9IiI+PGc+PGc+Cgk8Zz4KCQk8Zz4KCQkJPHBhdGggZD0iTTAsMjM0LjkxOWwxNzQuNjgyLDEwMi4zOTlsMTAyLjM5OSwxNzQuNjgyTDUxMiwwLjAwMUwwLDIzNC45MTl6IE0yNzUuMzg3LDQ3OC4xNmwtODUuMTc2LTE0NS4zMDRsNTIuMDk3LTUyLjA5NyAgICAgbC0xMS4wNjgtMTEuMDY4bC01Mi4wOTgsNTIuMDk4TDMzLjg0LDIzNi42MTJMNDU5LjcyNiw0MS4yMDZMMjkzLjI0OSwyMDcuNjgxbDExLjA2OCwxMS4wNjhMNDcwLjc5NSw1Mi4yNzVMMjc1LjM4Nyw0NzguMTZ6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIiBzdHlsZT0iZmlsbDojRkZGRkZGIj48L3BhdGg+CgkJCQoJCQkJPHJlY3QgeD0iMjU3LjEzMiIgeT0iMjIzLjEyMSIgdHJhbnNmb3JtPSJtYXRyaXgoLTAuNzA3MSAtMC43MDcxIDAuNzA3MSAtMC43MDcxIDI3Ny42MjkyIDYwOS4wNzMzKSIgd2lkdGg9IjE1LjY1MiIgaGVpZ2h0PSI0Ny44MzQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIHN0eWxlPSJmaWxsOiNGRkZGRkYiPjwvcmVjdD4KCQk8L2c+Cgk8L2c+CjwvZz48L2c+IDwvc3ZnPg=="
    sx={{width: 28}}
  />
);

const ImageSMS = (
  <Atom.Image
    src="data:image/svg+xml;base64,
PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxMi4wMDIgNTEyLjAwMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyLjAwMiA1MTIuMDAyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMiIgaGVpZ2h0PSI1MTIiIGNsYXNzPSIiPjxnPjxnPgoJPGc+CgkJPGc+CgkJCTxwYXRoIGQ9Ik0xNDQuNDgxLDMyNi44NTZsLTIwLjMzNiw2MS4wMDNsNjEuMDA0LTIwLjMzNUw0ODcuOTQ2LDY0LjcyOWwtNDAuNjY5LTQwLjY2OUwxNDQuNDgxLDMyNi44NTZ6IE0xNzYuNjkxLDM1My44MzcgICAgIGwtMjcuNzgyLDkuMjYxbDkuMjYxLTI3Ljc4MmwzMC4xNS0zMC4xNWwxOC41MjEsMTguNTIxTDE3Ni42OTEsMzUzLjgzN3ogTTIxNy45MTUsMzEyLjYxM2wtMTguNTIxLTE4LjUyMUw0NDcuMjc3LDQ2LjIwOCAgICAgbDE4LjUyMSwxOC41MjFMMjE3LjkxNSwzMTIuNjEzeiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBzdHlsZT0iZmlsbDojRkZGRkZGIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCI+PC9wYXRoPgoJCQkKCQkJCTxyZWN0IHg9IjQ3Ni40MzUiIHk9Ii0zLjY1NyIgdHJhbnNmb3JtPSJtYXRyaXgoMC43MDcxIC0wLjcwNzEgMC43MDcxIDAuNzA3MSAxMjIuMjI4NCAzNTAuNTQ5NCkiIHdpZHRoPSIxNS42NiIgaGVpZ2h0PSI2Mi43NzciIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6I0ZGRkZGRiIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcmVjdD4KCQkJPHBvbHlnb24gcG9pbnRzPSI0NTAuNDI4LDQ5Ni4zNDEgMTUuNjY1LDQ5Ni4zNDEgMTUuNjY1LDY5LjYyIDM2MS43MzksNjkuNjIgMzYxLjczOSw1My45NiAwLjAwNSw1My45NiAwLjAwNSw1MTIuMDAyICAgICAgNDY2LjA4OSw1MTIuMDAyIDQ2Ni4wODksMTQyLjIyNiA0NTAuNDI4LDE0Mi4yMjYgICAgIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiNGRkZGRkYiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIj48L3BvbHlnb24+CgkJPC9nPgoJPC9nPgo8L2c+PC9nPiA8L3N2Zz4="
    sx={{width: 28}}
  />
);

const menu = [
  {
    label: 'Search',
    to: '/dashboard',
  },
  {
    label: 'Featured Jobs',
    to: '/dashboard/featured',
  },
  {
    label: 'Administrator',
    to: '/dashboard/admin',
  },
];

export default SearchTemplate;
