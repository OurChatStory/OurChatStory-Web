import scipy.stats as st


def zscore(amt):
    mean = 22000
    std = 12000
    z = (amt - mean) / std
    p = st.norm.cdf(z)
    return z, max(min(p, 0.999999), 0.0001)
