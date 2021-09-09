// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'

export default class LoyaltiesController {
  public async showId({ params, view }) {
    let customer = await Database
      .from('res_partner')
      .innerJoin('res_country','res_country.id','=','res_partner.country_id')
      .select(
        'res_partner.display_name',
        'res_partner.tz',
        'res_partner.website',
        'res_partner.active',
        'res_partner.street',
        'res_partner.street2',
        'res_partner.zip',
        'res_partner.email',
        'res_partner.city',
        'res_partner.state_id',
        'res_country.name AS country',
        'res_partner.email',
        'res_partner.phone',
        'res_partner.is_company',
        'res_partner.supplier_rank',
        'res_partner.customer_rank',
        'res_partner.barcode'
      )
      .where('res_partner.id', params.id)
      .first();

    return view.render('contacts/show_id', {customer});
  }
}