


    const songs = {
        '7bXgB6jMjp9ATFy66eO08Z': 4,
        '2wY79sveU1sp5g7SokKOiI': 5,
        '46pWGuE3dSwY3bMMXGBvVS': 3,
        '6KImCVD70vtIoJWnq6nGn3': 5,
        '41MozSoPIsD1dJM0CLPjZF': 4,
        '1Cs0zKBU1kc0i8ypK3B9ai': 5,
        '5Pwc4xIPtQLFEnJriah9YJ': 5,
        '57vWImR43h4CaDao012Ofp': 3,
        '6VuMaDnrHyPL1p4EHjYLi7': 1,
        '0hCNtLu0JehylgoiP8L4Gh': 4,
        '3MZsBdqDrRTJihTHQrO6Dq': 2,
        '1Xyo4u8uXC1ZmMpatF05PJ': 2,
        '4yvcSjfu4PC0CYQyLy4wSq': 2,
        '5XKFrudbV4IiuE5WuTPRmT': 1,
        '5y8tKLUfMvliMe8IKamR32': 1,
        '1wRPtKGflJrBx9BmLsSwlU': 1,
        '3WTrdbZU99dgTtt3ZkyamT': 2,        
        '2tIP7SsRs7vjIcLrU85W8J': 1,
        '1aSxMhuvixZ8h9dK9jIDwL': 1,
        '6vWDO969PvNqNYHIOW5v0m': 1,
        '46xBNx0j6cwY6sD9LgMTm1': 2,
        '5gqmbbfjcikQBzPB5Hv13I': 1,
        '2txHhyCwHjUEpJjWrEyqyX': 1,
        '43BxCL6t4c73BQnIJtry5v': 2,
        '1rpxM2mBJnWdfPeieLDYOc': 1,
        '0GgY7hjMoGDsX8ZDe2mwds': 1,
        '0dLWSYE7my9AbpQYNJ0ABV': 1,
        '22wbnEMDvgVIAGdFeek6ET': 1,
        '2aV2tpJtR55vg19SxBJvNs': 1,
        '4xDh11zptvPADSQxvbiClo': 1,
        '0j6Z5YMSqBePHbPKLQwrcU': 1,
        '7H9Le3C3Z6DHOLxZrA3lVr': 2,
        '556XyBuO17TCo0Bviw5nCW': 4,
        '4vczAVLBVJzhMndKRCsQls': 1,
        '5Qp3JNCRbT2jq54o50tq4F': 1,
        '7jVv8c5Fj3E9VhNjxT4snq': 1,
        '5M7RMcbgYy45XzC51HU355': 1
        }

    const sortable = Object.entries(songs)
    .sort(([,a],[,b]) => b-a)
    .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});

    // let sortable = [];
    // for (var vehicle in songs) {
    //     sortable.push([vehicle, songs[vehicle]]);
    // }
    // sortable.sort(function(a, b) {
    //     return b[1] - a[1];
    // });

console.log(sortable);