import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CallMissed01Icon({
  iconName = 'call-missed-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
