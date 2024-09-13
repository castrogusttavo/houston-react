import React from 'react'
import { Icon, IconProps } from '../Icon'

export function TickDouble01Icon({
  iconName = 'tick-double-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
