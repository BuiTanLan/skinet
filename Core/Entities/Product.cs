namespace Core.Entities;

public class Product : BaseEntity
{
    public string Name { get; set; }
    public string Description { get; set; }
    public decimal Price { get; set; }
    //public string PictureUrl { get; set; }
    public ProductType ProductType { get; set; }
    public int ProductTypeId { get; set; }
    public ProductBrand ProductBrand { get; set; }
    public int ProductBrandId { get; set; }
    private readonly List<Photo> _photos = new();
    public IReadOnlyList<Photo> Photos => _photos.AsReadOnly();

    public void AddPhoto(string pictureUrl, string fileName, bool isMain = false)
    {
        var photo = new Photo
        {
            FileName = fileName,
            PictureUrl = pictureUrl
        };

        if (_photos.Count == 0) photo.IsMain = true;

        _photos.Add(photo);
    }

    public void RemovePhoto(int id)
    {
        var photo = _photos.Find(x => x.Id == id);
        _photos.Remove(photo);
    }

    public void SetMainPhoto(int id)
    {
        var currentMain = _photos.SingleOrDefault(x => x.IsMain);
        foreach (var item in _photos.Where(item => item.IsMain))
        {
            item.IsMain = false;
        }

        var photo = _photos.Find(x => x.Id == id);
        if (photo is { })
        {
            photo.IsMain = true;
            if (currentMain is { }) currentMain.IsMain = false;
        }

    }
}
