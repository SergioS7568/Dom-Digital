import Grid from "../Grid/Grid";

const DomiciliosDigitales = () => {
  return (
    <div>
      <Grid container gap={3}>
        <Grid item xs={4} sm={1} md={12} lg={1} xl={1}>
          <h1 className="text-3xl font-bold underline bg-red-500">logo</h1>
        </Grid>
        <Grid item xs={5} sm={1} md={12} lg={1} xl={1}>
          <h1 className="text-3xl font-bold underline bg-green-500">
            empty space
          </h1>
        </Grid>
        <Grid item xs={3} sm={1} md={12} lg={1} xl={1}>
          <h1 className="text-3xl font-bold underline bg-yellow-500">Text</h1>
        </Grid>
      </Grid>

      <Grid container gap={1}>
        <Grid item xs={2} sm={1} md={1} lg={1} xl={12}>
          <h1 className="text-3xl font-bold underline bg-red-500">Text</h1>
        </Grid>
        <Grid item xs={7} sm={12}>
          <h1 className="text-3xl font-bold underline bg-green-500">
            empty space
          </h1>
        </Grid>
        <Grid item xs={1} sm={1} md={12} lg={1} xl={1}>
          <h1 className="text-3xl font-bold underline bg-yellow-500">texto</h1>
        </Grid>
        <Grid item xs={1} sm={1} md={1} lg={12} xl={1}>
          <h1 className="text-3xl font-bold underline bg-blue-500">
            dropdown list
          </h1>
        </Grid>
        <Grid item xs={1} sm={1} md={1} lg={12} xl={1}>
          <h1 className="text-3xl font-bold underline bg-orange-500">boton</h1>
        </Grid>
      </Grid>

      <Grid container gap={3}>
        <Grid item xs={3} sm={1} md={1} lg={1} xl={1}>
          <h1 className="text-3xl font-bold underline bg-red-500">text</h1>
        </Grid>
        <Grid item xs={1} sm={12} md={1} lg={1} xl={1}>
          <h1 className="text-3xl font-bold underline bg-green-500">
            empty space
          </h1>
        </Grid>
        <Grid item xs={4} sm={1} md={12} lg={1} xl={1}>
          <h1 className="text-3xl font-bold underline bg-yellow-500">text</h1>
        </Grid>
        <Grid item xs={1} sm={1} md={1} lg={12} xl={1}>
          <h1 className="text-3xl font-bold underline bg-blue-500">
            empty space
          </h1>
        </Grid>
        <Grid item xs={3} sm={1} md={1} lg={1} xl={12}>
          <h1 className="text-3xl font-bold underline bg-orange-500">text</h1>
        </Grid>
      </Grid>

      <Grid container gap={1}>
        <Grid item xs={2} sm={1} md={1} lg={1} xl={12}>
          <h1 className="text-3xl font-bold underline bg-red-500">
            empty space
          </h1>
        </Grid>
        <Grid item xs={1} sm={12}>
          <h1 className="text-3xl font-bold underline bg-green-500">btn</h1>
        </Grid>
        <Grid item xs={1} sm={1} md={12} lg={1} xl={1}>
          <h1 className="text-3xl font-bold underline bg-yellow-500">btn</h1>
        </Grid>
        <Grid item xs={4} sm={1} md={1} lg={12} xl={1}>
          <h1 className="text-3xl font-bold underline bg-blue-500">btns</h1>
        </Grid>
        <Grid item xs={1} sm={1} md={1} lg={12} xl={1}>
          <h1 className="text-3xl font-bold underline bg-orange-500">btn</h1>
        </Grid>
        <Grid item xs={1} sm={1} md={1} lg={12} xl={1}>
          <h1 className="text-3xl font-bold underline bg-cyan-500">btn</h1>
        </Grid>
        <Grid item xs={2} sm={1} md={1} lg={1} xl={12}>
          <h1 className="text-3xl font-bold underline bg-purple-500">
            empty space
          </h1>
        </Grid>
      </Grid>

      <Grid container gap={4}>
        <Grid item xs={12} sm={1} md={1} lg={1} xl={12}>
          <h1 className="text-3xl font-bold underline bg-red-500">text</h1>
        </Grid>
        <Grid item xs={12} sm={1} md={1} lg={1} xl={12}>
          <h1 className="text-3xl font-bold underline bg-green-500">text</h1>
        </Grid>
      </Grid>
    </div>
  );
};
export default DomiciliosDigitales;
