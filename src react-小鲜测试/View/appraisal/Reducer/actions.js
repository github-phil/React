function mapDispatchToProp (dispatch) {
    return {
        updata_gender: function (data) {
            dispatch({
                type: 'updata_gender',
                data: data
            });
        }
    };
};
export default mapDispatchToProp;
