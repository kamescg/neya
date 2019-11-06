/* --- Styles --- */
const styles = {
  searchSelect: {},
};

/* --- Component --- */
export const GeograpicLocation = ({register, errors, isComplete}) => {
  return (
    <Atom.Flex column sx={{py: 3}}>
      {/* Skils */}
      <Molecule.Field
        name="county"
        as="select"
        variants={['text']}
        disabled={isComplete}
        register={register}
        errors={errors}
        label="Country"
        placeholder="Country"
        sx={{
          height: 50,
        }}
        sxWrapper={styles.searchSelect}>
        <option value="select">Select</option>
      </Molecule.Field>
      {/* Bounties Complete */}
      <Molecule.Field
        name="search"
        as="select"
        variants={['text']}
        disabled={isComplete}
        register={register}
        errors={errors}
        label="State"
        placeholder="State"
        sx={{
          height: 50,
        }}
        sxWrapper={styles.searchSelect}>
        <option value="select">Select</option>
      </Molecule.Field>
      {/* Bounties Complete */}
      <Molecule.Field
        name="leaderboard"
        as="select"
        variants={['text']}
        disabled={isComplete}
        register={register}
        errors={errors}
        label="Region"
        placeholder="Region"
        sx={{
          height: 50,
        }}
        sxWrapper={styles.searchSelect}>
        <option value="select">Select</option>
      </Molecule.Field>

      {/* Bounties Complete */}
      <Molecule.Field
        name="persona"
        as="select"
        variants={['text']}
        disabled={isComplete}
        register={register}
        errors={errors}
        label="Persona"
        placeholder="Persona"
        sx={{
          height: 50,
        }}
        sxWrapper={styles.searchSelect}>
        <option value="select">Select</option>
      </Molecule.Field>
    </Atom.Flex>
  );
};
