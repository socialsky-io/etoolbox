import { Badge, FormControl, Grid, InputLabel, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import PaletteIcon from '@material-ui/icons/Palette';
import * as copy from 'copy-to-clipboard';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import FeatureTitle from '../../components/FeatureTitle';
import { useToasterUpdate } from '../../components/Toaster/ToasterProvider';
import * as services from './services';


const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(1),
    },
    tableHeader: {
        backgroundColor: theme.palette.primary.main,
    },
    colorCell: {
        cursor: 'pointer',
    },
    form: {
        marginTop: theme.spacing(2),
    },
    formControl: {
        margin: theme.spacing(1),
    },
    toolbar: {
        '& > *': {
            marginLeft: theme.spacing(1),
            marginTop: theme.spacing(1),
        },
    },
}));

interface Props {
    width: Breakpoint;
}

const NamedColors = (props: Props) => {
    const title = 'Color categories';
    const classes = useStyles();
    const { setToasterState } = useToasterUpdate();
    const [colors, setColors] = useState(services.NAMED_COLORS);
    const [family, setFamily] = useState('-');
    const [filter, setFilter] = useState('');

    const handleCopy = (data: string) => {
        const feedback = data.substr(0, 20);
        const message = `Content copied into clipboard: ${feedback} …`;

        copy.default(data, { format: 'text/plain' });
        setToasterState({ open: true, message, type: 'success', autoHideDuration: 2000 });
    };

    useEffect(()=>{
        if (family === '-') {
            setColors(services.NAMED_COLORS);
        } else {
            setColors(services.NAMED_COLORS.filter(it => it.family === family));
        }
    }, [family, setColors]);

    return (
        <>
            <Helmet title={title} />
            <div className={classes.root}>
                <FeatureTitle iconType={PaletteIcon} title={title} />

                <div className={classes.form}>
                    <Grid container spacing={1}>
                        <Grid item md={2} sm={3} xs={6}>
                            <FormControl className={classes.formControl}>
                                <InputLabel id="family">Family</InputLabel>
                                <Select name="family" value={family} labelId="family" autoFocus={isWidthUp('md', props.width)}
                                    onChange={(e: any) => setFamily(e.target.value)}>
                                    <MenuItem key="-" value="-">All</MenuItem>
                                    {services.FAMILY_NAMES.map(name => (<MenuItem key={name} value={name}>{name}</MenuItem>))}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item md={2} sm={3} xs={6}>
                            <FormControl className={classes.formControl}>
                                <TextField name={filter} value={filter} label="Filter" type="text"
                                    onChange={(e: any) => setFilter(e.target.value)} />
                            </FormControl>
                        </Grid>
                        <Grid item md={8} sm={6} xs={12}>
                            <Grid container justifyContent="flex-end" className={classes.toolbar}>
                                ?
                            </Grid>
                        </Grid>
                    </Grid>
                </div>

                <TableContainer component={Paper}>
                    <Table>
                        <TableHead className={classes.tableHeader}>
                            <TableRow>
                                <TableCell component="th" scope="row">Name</TableCell>
                                <TableCell component="th" scope="row">RGB</TableCell>
                                <TableCell component="th" scope="row">HEX</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {colors.map(colors =>
                                colors.colors.map(c => {
                                    const name = c.htmlName;
                                    const hexCode = '#' + c.hexCode.split(' ').join('').toLowerCase();
                                    const rgbCode = `rgb(${c.rgbDecimal.split(' ').join(',')})`;

                                    return (
                                        <TableRow key={c.htmlName + c.hexCode}>
                                            <TableCell className={classes.colorCell} onClick={() => handleCopy(name)} title="Copy name to clipboard">
                                                <strong>{name}</strong><br />({colors.family})
                                            </TableCell>
                                            <TableCell className={classes.colorCell} style={{ backgroundColor: hexCode, width: '30%' }}
                                                onClick={() => handleCopy(rgbCode)} title="Copy RGB code to clipboard">
                                                <Badge badgeContent={rgbCode} color="primary" />
                                            </TableCell>
                                            <TableCell className={classes.colorCell} style={{ backgroundColor: hexCode, width: '30%' }}
                                                onClick={() => handleCopy(hexCode)} title="Copy HEX code to clipboard">
                                                <Badge badgeContent={hexCode} color="primary" />
                                            </TableCell>
                                        </TableRow>
                                    )
                                }))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </>
    );
};

export default withWidth()(NamedColors);
