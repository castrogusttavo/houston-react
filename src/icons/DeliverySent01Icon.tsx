import React from 'react'
import { Icon, IconProps } from '../Icon'

export function DeliverySent01Icon({
  iconName = 'delivery-sent-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
