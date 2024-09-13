import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CallRinging01Icon({
  iconName = 'call-ringing-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
