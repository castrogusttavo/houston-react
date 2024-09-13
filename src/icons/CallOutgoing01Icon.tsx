import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CallOutgoing01Icon({
  iconName = 'call-outgoing-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
