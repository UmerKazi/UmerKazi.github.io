import { readdirSync } from "fs"

{
    offering.data.isPublicViewable && (
        <Grid item>
            <Typography variant="h2" style={{ fontWeight: 'bold' }}>
                Instructions
            </Typography>

            <Typography variant="h3" gutterBottom>
                {offering.data.instructions ? (
                    <>{offering.data.instructions}</>
                ) : (
                    <>N/A</>
                )}
            </Typography>
        </Grid>
    {
        offering.data.address && (
            <Grid item>
                <Typography variant="h2" style={{ fontWeight: 'bold' }}>
                    Address
                </Typography>
                <Typography variant="h3" gutterBottom>
                    {offering.data.address}
                </Typography>
            </Grid>
        )
    }

    {
        offering.data.isPublicViewable && (
            <Grid item>
                <Typography variant="h2" style={{ fontWeight: 'bold' }}>
                    Instructions
                </Typography>
                {offering.data.instructions && (
                    <Typography variant="h3" gutterBottom>
                        {offering.data.instructions}
                    </Typography>
                )}
                {(offering.data.instructions == null) && (
                    <Typography variant="h3" gutterBottom>
                        N/A
                    </Typography>
                )}
            </Grid>
    {
            offering.data.address && (
                <Grid item>
                    <Typography variant="h2" style={{ fontWeight: 'bold' }}>
                        Address
                    </Typography>
                    <Typography variant="h3" gutterBottom>
                        {offering.data.address}
                    </Typography>
                </Grid>
            )
        }
)
    }
