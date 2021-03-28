'use strict';
// This is a list of all types in the schema, types upon which fields are based. You can learn more about how different calls and different types make use of these types. See also Simple Schema Types.
// https://developer.ebay.com/api-docs/sell/inventory/types

/**
 * This enumeration type is used to indicate the different eBay marketplace sites.
 * @link https://developer.ebay.com/api-docs/sell/inventory/types/slr:MarketplaceEnum
 * @type {{EBAY_DE: string, EBAY_NO: string, EBAY_NL: string, EBAY_PT: string, EBAY_BE: string, EBAY_TW: string, EBAY_FI: string, EBAY_HK: string, EBAY_RU: string, EBAY_PR: string, EBAY_PH: string, EBAY_VN: string, EBAY_CZ: string, EBAY_PL: string, EBAY_SG: string, EBAY_SE: string, EBAY_MOTORS: string, EBAY_DK: string, EBAY_JP: string, EBAY_HU: string, EBAY_FR: string, EBAY_NZ: string, EBAY_US: string, EBAY_CA: string, EBAY_CH: string, EBAY_IN: string, EBAY_IL: string, EBAY_IE: string, EBAY_GB: string, EBAY_ID: string, EBAY_ES: string, EBAY_PE: string, EBAY_AU: string, EBAY_TH: string, EBAY_AT: string, EBAY_ZA: string, EBAY_MY: string, EBAY_IT: string, EBAY_GR: string, EBAY_CN: string}}
 */
const MarketplaceEnum = {
    'EBAY_US': 'EBAY_US',
    'EBAY_MOTORS': 'EBAY_MOTORS',
    'EBAY_CA': 'EBAY_CA',
    'EBAY_GB': 'EBAY_GB',
    'EBAY_AU': 'EBAY_AU',
    'EBAY_AT': 'EBAY_AT',
    'EBAY_BE': 'EBAY_BE',
    'EBAY_FR': 'EBAY_FR',
    'EBAY_DE': 'EBAY_DE',
    'EBAY_IT': 'EBAY_IT',
    'EBAY_NL': 'EBAY_NL',
    'EBAY_ES': 'EBAY_ES',
    'EBAY_CH': 'EBAY_CH',
    'EBAY_TW': 'EBAY_TW',
    'EBAY_CZ': 'EBAY_CZ',
    'EBAY_DK': 'EBAY_DK',
    'EBAY_FI': 'EBAY_FI',
    'EBAY_GR': 'EBAY_GR',
    'EBAY_HK': 'EBAY_HK',
    'EBAY_HU': 'EBAY_HU',
    'EBAY_IN': 'EBAY_IN',
    'EBAY_ID': 'EBAY_ID',
    'EBAY_IE': 'EBAY_IE',
    'EBAY_IL': 'EBAY_IL',
    'EBAY_MY': 'EBAY_MY',
    'EBAY_NZ': 'EBAY_NZ',
    'EBAY_NO': 'EBAY_NO',
    'EBAY_PH': 'EBAY_PH',
    'EBAY_PL': 'EBAY_PL',
    'EBAY_PT': 'EBAY_PT',
    'EBAY_PR': 'EBAY_PR',
    'EBAY_RU': 'EBAY_RU',
    'EBAY_SG': 'EBAY_SG',
    'EBAY_ZA': 'EBAY_ZA',
    'EBAY_SE': 'EBAY_SE',
    'EBAY_TH': 'EBAY_TH',
    'EBAY_VN': 'EBAY_VN',
    'EBAY_CN': 'EBAY_CN',
    'EBAY_PE': 'EBAY_PE',
    'EBAY_JP': 'EBAY_JP'
};

/**
 * This enumeration type is used to indicate the listing format of the offer.
 * @link https://developer.ebay.com/api-docs/sell/inventory/types/slr:FormatTypeEnum
 * @type {{FIXED_PRICE: string}}
 */
const FormatTypeEnum = {
    'FIXED_PRICE': 'FIXED_PRICE'
};

/**
 * This enumeration type is used by the fulfillmentTime field of the PickupAtLocationAvailability type to specify the time unit that is used to indicate the fulfillment time, which is how soon an In-Store Pickup order will be ready for pickup at the store identified in the corresponding merchantLocationKey field. Typically, the unit value will be HOUR.
 * @link https://developer.ebay.com/api-docs/sell/inventory/types/slr:TimeDurationUnitEnum
 * @type {{MONTH: string, YEAR: string, BUSINESS_DAY: string, HOUR: string, CALENDAR_DAY: string, MINUTE: string, SECOND: string, MILLISECOND: string, DAY: string}}
 */
const TimeDurationUnitEnum = {
    'YEAR': 'YEAR',
    'MONTH': 'MONTH',
    'DAY': 'DAY',
    'HOUR': 'HOUR',
    'CALENDAR_DAY': 'CALENDAR_DAY',
    'BUSINESS_DAY': 'BUSINESS_DAY',
    'MINUTE': 'MINUTE',
    'SECOND': 'SECOND',
    'MILLISECOND': 'MILLISECOND'
};

/**
 * This enumeration type is used to indicate the condition of the item. Item conditions can vary with each eBay Category. For more detailed explanations of different item conditions for some top eBay Categories, see the Item conditions by category help topic.
 * @link https://developer.ebay.com/api-docs/sell/inventory/types/slr:ConditionEnum
 * @type {{FOR_PARTS_OR_NOT_WORKING: string, NEW: string, USED_GOOD: string, NEW_OTHER: string, MANUFACTURER_REFURBISHED: string, SELLER_REFURBISHED: string, USED_EXCELLENT: string, NEW_WITH_DEFECTS: string, USED_ACCEPTABLE: string, LIKE_NEW: string, USED_VERY_GOOD: string}}
 */
const ConditionEnum = {
    'NEW': 'NEW',
    'LIKE_NEW': 'LIKE_NEW',
    'NEW_OTHER': 'NEW_OTHER',
    'NEW_WITH_DEFECTS': 'NEW_WITH_DEFECTS',
    'MANUFACTURER_REFURBISHED': 'MANUFACTURER_REFURBISHED',
    'SELLER_REFURBISHED': 'SELLER_REFURBISHED',
    'USED_EXCELLENT': 'USED_EXCELLENT',
    'USED_VERY_GOOD': 'USED_VERY_GOOD',
    'USED_GOOD': 'USED_GOOD',
    'USED_ACCEPTABLE': 'USED_ACCEPTABLE',
    'FOR_PARTS_OR_NOT_WORKING': 'FOR_PARTS_OR_NOT_WORKING'
};

/**
 * This enumeration type is used to specify/indicate the unit of measurement with which the dimensions of the shipping package are being measured.
 * @link https://developer.ebay.com/api-docs/sell/inventory/types/slr:LengthUnitOfMeasureEnum
 * @type {{METER: string, INCH: string, CENTIMETER: string, FEET: string}}
 */
const LengthUnitOfMeasureEnum = {
    'INCH': 'INCH',
    'FEET': 'FEET',
    'CENTIMETER': 'CENTIMETER',
    'METER': 'METER'
};

/**
 * This enumerated type is used to indicate what type of shipping package will be used to ship an inventory item.
 * @link https://developer.ebay.com/api-docs/sell/inventory/types/slr:PackageTypeEnum
 * @type {{CARS: string, EXPANDABLE_TOUGH_BAGS: string, LETTER: string, TOUGH_BAGS: string, MEDIUM_CANADA_POST_BOX: string, SMALL_CANADA_POST_BUBBLE_MAILER: string, SMALL_CANADA_POST_BOX: string, MOTORBIKES: string, ONE_WAY_PALLET: string, PACKAGE_THICK_ENVELOPE: string, EXTRA_LARGE_PACK: string, CARAVAN: string, PARCEL_OR_PADDED_ENVELOPE: string, ROLL: string, LARGE_ENVELOPE: string, EUROPALLET: string, LARGE_CANADA_POST_BUBBLE_MAILER: string, BULKY_GOODS: string, USPS_LARGE_PACK: string, MEDIUM_CANADA_POST_BUBBLE_MAILER: string, FURNITURE: string, LARGE_CANADA_POSTBOX: string, MAILING_BOX: string, PADDED_BAGS: string, USPS_FLAT_RATE_ENVELOPE: string, UPS_LETTER: string, VERY_LARGE_PACK: string, WINE_PAK: string, INDUSTRY_VEHICLES: string}}
 */
const PackageTypeEnum = {
    'LETTER': 'LETTER',
    'BULKY_GOODS': 'BULKY_GOODS',
    'CARAVAN': 'CARAVAN',
    'CARS': 'CARS',
    'EUROPALLET': 'EUROPALLET',
    'EXPANDABLE_TOUGH_BAGS': 'EXPANDABLE_TOUGH_BAGS',
    'EXTRA_LARGE_PACK': 'EXTRA_LARGE_PACK',
    'FURNITURE': 'FURNITURE',
    'INDUSTRY_VEHICLES': 'INDUSTRY_VEHICLES',
    'LARGE_CANADA_POSTBOX': 'LARGE_CANADA_POSTBOX',
    'LARGE_CANADA_POST_BUBBLE_MAILER': 'LARGE_CANADA_POST_BUBBLE_MAILER',
    'LARGE_ENVELOPE': 'LARGE_ENVELOPE',
    'MAILING_BOX': 'MAILING_BOX',
    'MEDIUM_CANADA_POST_BOX': 'MEDIUM_CANADA_POST_BOX',
    'MEDIUM_CANADA_POST_BUBBLE_MAILER': 'MEDIUM_CANADA_POST_BUBBLE_MAILER',
    'MOTORBIKES': 'MOTORBIKES',
    'ONE_WAY_PALLET': 'ONE_WAY_PALLET',
    'PACKAGE_THICK_ENVELOPE': 'PACKAGE_THICK_ENVELOPE',
    'PADDED_BAGS': 'PADDED_BAGS',
    'PARCEL_OR_PADDED_ENVELOPE': 'PARCEL_OR_PADDED_ENVELOPE',
    'ROLL': 'ROLL',
    'SMALL_CANADA_POST_BOX': 'SMALL_CANADA_POST_BOX',
    'SMALL_CANADA_POST_BUBBLE_MAILER': 'SMALL_CANADA_POST_BUBBLE_MAILER',
    'TOUGH_BAGS': 'TOUGH_BAGS',
    'UPS_LETTER': 'UPS_LETTER',
    'USPS_FLAT_RATE_ENVELOPE': 'USPS_FLAT_RATE_ENVELOPE',
    'USPS_LARGE_PACK': 'USPS_LARGE_PACK',
    'VERY_LARGE_PACK': 'VERY_LARGE_PACK',
    'WINE_PAK': 'WINE_PAK'
};

/**
 * This enumerated type is used to indicate what unit of measurement is used to measure the weight of a shipping package. The weight and dimensions of a shipping package are generally required when calculated shipping rates are used, and weight is required if flat-rate shipping is used, but the seller is charging a weight surcharge.
 * @link https://developer.ebay.com/api-docs/sell/inventory/types/slr:WeightUnitOfMeasureEnum
 * @type {{POUND: string, KILOGRAM: string, GRAM: string, OUNCE: string}}
 */
const WeightUnitOfMeasureEnum = {
    'POUND': 'POUND',
    'KILOGRAM': 'KILOGRAM',
    'OUNCE': 'OUNCE',
    'GRAM': 'GRAM'
};

/**
 * This enumeration type is used to indicate whether an inventory item has quantity available for purchase at the merchant's store indicated in the pickupAtLocationAvailability.merchantLocationKey field. This type is only applicable to inventory available for In-Store Pickup orders.
 * @link https://developer.ebay.com/api-docs/sell/inventory/types/slr:AvailabilityTypeEnum
 * @type {{SHIP_TO_STORE: string, OUT_OF_STOCK: string, IN_STOCK: string}}
 */
const AvailabilityTypeEnum = {
    'IN_STOCK': 'IN_STOCK',
    'OUT_OF_STOCK': 'OUT_OF_STOCK',
    'SHIP_TO_STORE': 'SHIP_TO_STORE'
};

/**
 * An enumerated type defining the possible states of an inventory location.
 * @type {{DISABLED: string, ENABLED: string}}
 */
const StatusEnum = {
    'DISABLED': 'DISABLED',
    'ENABLED': 'ENABLED'
};

/**
 * An enumerated type defining the days of the week. This type is used by the dayOfWeekEnum field under the operatingHours container to indicate which days a merchant's store is open to pick up In-Store Pickup or Click and Collect orders.
 * @link https://developer.ebay.com/api-docs/sell/inventory/types/api:DayOfWeekEnum
 * @type {{WEDNESDAY: string, MONDAY: string, THURSDAY: string, SUNDAY: string, TUESDAY: string, FRIDAY: string, SATURDAY: string}}
 */
const DayOfWeekEnum = {
    'MONDAY': 'MONDAY',
    'TUESDAY': 'TUESDAY',
    'WEDNESDAY': 'WEDNESDAY',
    'THURSDAY': 'THURSDAY',
    'FRIDAY': 'FRIDAY',
    'SATURDAY': 'SATURDAY',
    'SUNDAY': 'SUNDAY'
};

module.exports = {
    MarketplaceEnum,
    FormatTypeEnum,
    TimeDurationUnitEnum,
    ConditionEnum,
    LengthUnitOfMeasureEnum,
    PackageTypeEnum,
    WeightUnitOfMeasureEnum,
    AvailabilityTypeEnum,
    StatusEnum,
    DayOfWeekEnum
};
