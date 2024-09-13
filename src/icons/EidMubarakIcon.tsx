import React from 'react'
import { Icon, IconProps } from '../Icon'

export function EidMubarakIcon({
  iconName = 'eid-mubarak',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
