export default {
    palette: {
        primary: {
            main: '#0094C2'
        }
    },
    typography: {
        fontFamily: '"Open Sans", sans-serif'
    },
    overrides: {
        // Style sheet name ⚛️
        MuiSelect: {
            select: {
                '&:focus': {
                    backgroundColor: 'none'
                }
            }
        },
        MuiPaper: {
            root: {
                color: 'rgba(68,68,68,0.88)',
                display: 'block'
            }
        },
        MuiButton: {
            root: {
                height: '40px'
            },
            contained: {
                boxShadow: 'none',
                borderRadius: '20px',
                lineHeight: '1',
                padding: '12px 16',
                fontSize: '14px',
                fontWeight: '600',
                textTransform: 'none'
            },
            text: {
                color: 'rgba(68, 68, 68, 0.88)',
                fontSize: '14px',
                padding: '8px 16',
                borderRadius: '32px',
                textTransform: 'none',
                fontWeight: '600'
            },
            outlined: {
                boxShadow: 'none',
                borderRadius: '20px',
                lineHeight: '1',
                padding: '12px 16',
                fontSize: '14px',
                fontWeight: '600',
                height: '40px',
                textTransform: 'none',
                border: 'solid 1px rgba(68, 68, 68, 0.24)',
                color: 'rgba(68, 68, 68, 0.88)'
            }
        },
        MuiTypography: {
            colorPrimary: {
                '&.linkPrimary': {
                    color: '#0094C2'
                },
                '&.linkPrimary:hover': {
                    color: '#0094C2',
                    textDecoration: 'underline'
                }
            }
        },
        MuiInputBase: {
            input: {
                // height: 'auto',
                boxSizing: 'border-box',
                fontSize: '15px',
                borderRadius: '6px'
            }
        },
        MuiOutlinedInput: {

            input: {
                padding: '12px',
                height: '48px',
                color: 'rgba(68, 68, 68, 0.88)',
                // fontWeight: '700',
                '&.MuiSelect-selectMenu': {
                    height: '48px'
                },
            },
            notchedOutline: {
                borderRadius: '6px',
                border: 'solid 1px',
                borderColor: 'rgba(68, 68, 68, 0.16)',
                "& legend": {
                    fontSize: ".65em"
                }
            },

            root: {
                '&:hover': {
                    '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'rgba(68, 68, 68, 0.26)'
                    }
                },
                // '&.Mui-focused': {
                //     '& .MuiOutlinedInput-notchedOutline': {
                //         borderWidth: '1px',
                //         borderColor: '#006ae7!important'
                //     }
                // },
                MuiSelect: {
                    backgroundColor: 'red'
                },
                '&.Mui-disabled': {
                    '& > .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'rgba(68, 68, 68, 0.06)!important',
                    }
                },
            }
        },
        MuiInputLabel: {
            outlined: {
                transform: 'translate(14px, 16px) scale(1)'
            },
            formControl: {}
        },
        MuiFormLabel: {
            root: {
                color: 'rgba(68, 68, 68, 0.56)',
                fontSize: '15px'

            },
            '&.Mui-disabled': {
                color: 'rgba(68, 68, 68, 0.28)',
            }
            // '&.Mui-focused': {
            //     color: 'rgba(68, 68, 68, 0.56)'
            // }
        },
        MuiFormControlLabel: {
            label: {
                '&.Mui-disabled': {
                    color: 'rgba(68, 68, 68, 0.56)'
                }
            }
        },
        MuiDialog: {
            paperWidthSm: {
                width: '100%',
                maxWidth: '712px',
                borderRadius: '6px',
                boxShadow: '0 4px 16px 0 rgba(52, 52, 52, 0.24)',
                padding: '32px'
            }
        },
        MuiPopover: {
            paper: {
                '&::-webkit-scrollbar': {
                    width: '6px',
                    height: '5px'
                },
                '&::-webkit-scrollbar-thumb': {
                    backgroundColor: 'rgba(68, 68, 68, 0.16)',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    borderRadius: '3.5px',
                    boxShadow: 'none'
                },
                '&::-webkit-scrollbar-track': {
                    background: 'none'
                },
                '&::-webkit-scrollbar-button': {
                    backgroundImage: 'none',
                    backgroundRepeat: 'no-repeat',
                    width: '0',
                    height: '0'
                }
            }
        }
    }
}
