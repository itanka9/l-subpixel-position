L.Marker.include({
  setLatLngPrecise (_latlng) {
    var latlng = L.latLng(_latlng),
      oldLatLng = this._latlng;

    this._latlng = latlng
    if (this._icon && this._map) {
      var projectedPoint = this._map.project(latlng)
      projectedPoint._subtract(this._map.getPixelOrigin())
      this._setPos(projectedPoint)
    }

    return this.fire('move', { oldLatLng: oldLatLng, latlng: this._latlng })
  }
});
