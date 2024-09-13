import React from 'react'
import { Icon, IconProps } from '../Icon'

export function VoucherIcon({ iconName = 'voucher', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
